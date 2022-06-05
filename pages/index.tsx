import { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../hooks';
import { HomeProps, LaunchesData } from '../Interfaces';
import { MainLayout } from '../layout/';
import { HomeIntro, HomeLaunches } from '../components';
import {
  fetchLaunchesData,
  setLaunchesDataStatic,
  setOffset,
  setLoadingTrigger
} from '../redux/launches/actions/';
import { transformLaunchesData } from '../utils/getLaunchesData';

const Home: NextPage<HomeProps> = ({ staticLaunchesData }) => {
  const [initialData, setInitialData] = useState<Array<LaunchesData>>(
    staticLaunchesData.slice(0, 6)
  );

  const dispatch = useAppDispatch();
  const { loadingTrigger, offset, isError, isEnd } = useAppSelector((state) => state.launches);

  useEffect(() => {
    dispatch(setLaunchesDataStatic(initialData));
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

    const staticLaunchesData = transformLaunchesData(data.results);

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
