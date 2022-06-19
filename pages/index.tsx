import { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { useAppSelector, useAppDispatch } from '../hooks';
import { HomePageProps, LaunchesData } from '../Interfaces';
import { MainLayout } from '../layout/';
import {
  fetchLaunchesData,
  setLaunchesDataStatic,
  setLoadingTrigger
} from '../redux/launches/actions/';
import { setRecentEventsData } from '../redux/recentEvents/actions';
import { transformLaunchesData, transRecentEventsData } from '../utils';
import { HomeIntro, HomeLaunches, Slider } from '../components';

import axios from 'axios';
import Head from 'next/head';

const Home: NextPage<HomePageProps> = ({ staticLaunchesData, staticEventsData }) => {
  const [offset, setOffset] = useState(12);

  const dispatch = useAppDispatch();
  const { loadingTrigger, isError, isEnd } = useAppSelector((state) => state.launches);
  const { recentEventsData } = useAppSelector((state) => state.recentEvents);

  useEffect(() => {
    dispatch(setLaunchesDataStatic(staticLaunchesData.slice(0, 6)));
    dispatch(setRecentEventsData(staticEventsData));
  }, []);

  const getLaunchesDataStatic = () => {
    const launchesData = staticLaunchesData.slice(0, offset);
    dispatch(setLaunchesDataStatic(launchesData));
    setOffset((prevState) => prevState + 6);
    dispatch(setLoadingTrigger(false));
  };

  useEffect(() => {
    if (loadingTrigger && offset <= 18) {
      getLaunchesDataStatic();
    }
    if (loadingTrigger && offset > 18) {
      dispatch(fetchLaunchesData(offset));
      setOffset((prevState) => prevState + 6);
    }
  }, [loadingTrigger]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      dispatch(setLoadingTrigger(true));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', event);
    if (isError || isEnd) window.removeEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, [isError, isEnd]);

  return (
    <>
      <Head>
        <title>Space Launch App</title>
        <meta name="description" content="SPA (single page application ) for Spacelaunch api" />
      </Head>

      <MainLayout header="homepage">
        <HomeIntro />
        <div className="container fill">
          <Slider data={recentEventsData} path={'event'} />
          <HomeLaunches />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: launchesData } = await axios.get(
      `https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=18&offset=0`
    );

    const { data: eventsData } = await axios.get(
      `https://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=15&offset=0`
    );

    const staticLaunchesData = transformLaunchesData(launchesData.results);
    const staticEventsData = transRecentEventsData(eventsData.results);

    return {
      props: { staticLaunchesData, staticEventsData },
      revalidate: 43200
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};
