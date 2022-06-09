import { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../hooks';
import { HomePageProps, LaunchesData } from '../Interfaces';
import { MainLayout } from '../layout/';
import { HomeIntro, HomeLaunches } from '../components';
import {
  fetchLaunchesData,
  setLaunchesDataStatic,
  setOffset,
  setLoadingTrigger
} from '../redux/launches/actions/';
import { transformLaunchesData, transRecentEventsData } from '../utils';
import { setRecentEventsData } from '../redux/recentEvents/actions';
import Slider from '../components/ui/Slider/Slider';

const Home: NextPage<HomePageProps> = ({ staticLaunchesData, staticEventsData }) => {
  const [initialData, setInitialData] = useState<Array<LaunchesData>>(
    staticLaunchesData.slice(0, 6)
  );

  const dispatch = useAppDispatch();
  const { loadingTrigger, offset, isError, isEnd } = useAppSelector((state) => state.launches);
  const { recentEventsData } = useAppSelector((state) => state.recentEvents);

  useEffect(() => {
    dispatch(setLaunchesDataStatic(initialData));
    dispatch(setRecentEventsData(staticEventsData));
  }, []);

  const getLaunchesDataStatic = () => {
    const launchesData = staticLaunchesData.slice(0, offset);
    dispatch(setLaunchesDataStatic(launchesData));
    dispatch(setOffset(6));
    dispatch(setLoadingTrigger(false));
  };

  useEffect(() => {
    if (loadingTrigger && offset <= 24 && !isEnd) {
      getLaunchesDataStatic();
    }
    if (loadingTrigger && offset > 24 && !isEnd) {
      dispatch(fetchLaunchesData(offset));
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
    <MainLayout header="homepage">
      <HomeIntro />
      <div className="container fill">
        <Slider data={recentEventsData} path={'event'} />
        <HomeLaunches />
      </div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: launchesData } = await axios.get(
      `https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=24&offset=0`
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
