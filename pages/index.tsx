import { useCallback, useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { useAppSelector, useAppDispatch } from '../hooks';
import { HomePageProps } from '../Interfaces';
import { MainLayout } from '../layout/';
import {
  fetchLaunchesData,
  setLaunchesDataStatic,
  setLoadingTrigger,
} from '../redux/launches/actions/';
import { setRecentEventsData } from '../redux/recentEvents/actions';
import { transformLaunchesData, transformRecentEventsData } from '../utils';
import { HomeIntro, HomeLaunches, Meta, Slider } from '../components';

import axios from 'axios';

const Home: NextPage<HomePageProps> = ({ staticLaunchesData, staticEventsData }) => {
  const [offset, setOffset] = useState(12);

  const dispatch = useAppDispatch();
  const { loadingTrigger, isError, isEnd } = useAppSelector((state) => state.launches);
  const { recentEventsData } = useAppSelector((state) => state.recentEvents);

  useEffect(() => {
    dispatch(setLaunchesDataStatic(staticLaunchesData.slice(0, 6)));
    dispatch(setRecentEventsData(staticEventsData));
  }, [staticLaunchesData, staticEventsData, dispatch]);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingTrigger]);

  const event = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      dispatch(setLoadingTrigger(true));
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', event);
    if (isError || isEnd) window.removeEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, [isError, isEnd, event]);

  return (
    <>
      <Meta
        title="Space Launch App"
        description="SPA (single page application) for Spacelaunch api"
      />

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
      `https://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=12&offset=0`
    );

    const staticLaunchesData = transformLaunchesData(launchesData.results);
    const staticEventsData = transformRecentEventsData(eventsData.results);

    return {
      props: { staticLaunchesData, staticEventsData },
      revalidate: 43200,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
