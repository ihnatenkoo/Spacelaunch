import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { LaunchesRequestData, HomeProps } from '../Interfaces';
import { MainLayout } from '../layout/';
import { HomeIntro, HomeLaunches } from '../components';
import { useEffect, useState } from 'react';

const Home: NextPage<HomeProps> = ({ launchesData }) => {
  const initialLaunchesData = launchesData.slice(0, 6);

  const [data, setData] = useState(initialLaunchesData);
  const [offset, setOffset] = useState(12);
  const [newData, setNewData] = useState(false);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
      setNewData(true);
    }
  };

  useEffect(() => {
    if (newData) {
      const newData = launchesData.slice(0, offset);
      setData(newData);
      setOffset((offset) => offset + 6);
      console.log(newData);
    }
    setNewData(false);
  }, [newData]);

  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, []);

  return (
    <MainLayout header="homepage">
      <HomeIntro />
      <div className="container fill">
        <HomeLaunches launchesData={data} />
      </div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    `https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=96&offset=0`
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
};
