import { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { useActions, useAppSelector } from '../hooks';
import { LaunchesRequestData, HomeProps, LaunchesData } from '../Interfaces';
import { MainLayout } from '../layout/';
import { HomeIntro, HomeLaunches } from '../components';

const Home: NextPage<HomeProps> = ({ staticLaunchesData }) => {
  const [initialData, setInitialData] = useState<Array<LaunchesData>>(
    staticLaunchesData.slice(0, 6)
  );
  const { loadingTrigger, offset, isError, isEnd } = useAppSelector((state) => state);
  const {
    fetchLaunchesData,
    setLaunchesDataStatic,
    setOffset,
    setLoading,
    setLoadingTrigger,
    setError,
    setEnd
  } = useActions();

  useEffect(() => {
    setLaunchesDataStatic(initialData);
  }, []);

  const getLaunchesDataServer = async (offset: number) => {
    try {
      setError(false);
      setLoading(true);
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

      if (launchesData.length < 6) setEnd();
      fetchLaunchesData(launchesData);
      setOffset(6);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      setLoadingTrigger(false);
    }
  };

  const getLaunchesDataStatic = () => {
    const launchesData = staticLaunchesData.slice(0, offset);
    setLaunchesDataStatic(launchesData);
    setOffset(6);
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
    if (isError) return;
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      console.log(isError);
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
        <HomeLaunches />
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

    const staticLaunchesData = data.results.map((item: LaunchesRequestData) => {
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
      props: { staticLaunchesData },
      revalidate: 43200
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};
