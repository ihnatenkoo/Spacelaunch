import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { LaunchesRequestData, HomeProps, LaunchesData } from '../Interfaces';
import { MainLayout } from '../layout/';
import { HomeIntro, HomeLaunches } from '../components';
import { useEffect, useState } from 'react';

const Home: NextPage<HomeProps> = ({ launchesData }) => {
  const [data, setData] = useState<Array<LaunchesData>>(launchesData.slice(0, 6));
  const [offset, setOffset] = useState<number>(12);
  const [loadingTrigger, setLoadingTrigger] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const getLaunchesDataServer = async (offset: number) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=6&offset=${offset}`
      );

      const launchesData = data.results.map((item: LaunchesRequestData) => {
        const { id, name, net: date } = item;
        const { image_url: image } = item.rocket.configuration;

        return {
          name,
          image,
          id,
          date
        };
      });

      if (launchesData.length < 6) setIsEnd(true);
      setData((data) => [...data, ...launchesData]);
      setOffset((offset) => offset + 6);
      setIsLoading(false);
      setLoadingTrigger(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setLoadingTrigger(false);
    }
  };

  const getLaunchesDataStatic = () => {
    const newData = launchesData.slice(0, offset);
    setData(newData);
    setOffset((offset) => offset + 6);
    setLoadingTrigger(false);
  };

  useEffect(() => {
    if (loadingTrigger && offset <= 24 && !isEnd) {
      getLaunchesDataStatic();
    }
    if (loadingTrigger && offset > 24 && !isEnd) {
      getLaunchesDataServer(offset);
    }
  }, [loadingTrigger]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 75) {
      setLoadingTrigger(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, []);

  return (
    <MainLayout header="homepage">
      <HomeIntro />
      <div className="container fill">
        <HomeLaunches launchesData={data} isLoading={isLoading} isEnd={isEnd} />
      </div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get(
      `https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=24&offset=0`
    );

    const launchesData = data.results.map((item: LaunchesRequestData) => {
      const { id, name, net: date } = item;
      const { image_url: image } = item.rocket.configuration;

      return {
        name,
        image,
        id,
        date
      };
    });

    return {
      props: { launchesData },
      revalidate: 43200
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};
