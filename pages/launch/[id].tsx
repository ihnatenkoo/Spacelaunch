import Head from 'next/head';
import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { LaunchPageProps } from '../../Interfaces';
import { MainLayout } from '../../layout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLaunchData } from '../../redux/singleLaunch/actions';
import { LaunchIntro, LaunchInfo, LaunchRocket, Map, MyYouTube } from '../../components';
import { transformSingleLaunchData } from '../../utils';
import { youtubeParser } from '../../utils/youtubeParser';

import axios from 'axios';

const Launch: NextPage<LaunchPageProps> = ({ singleLaunchData }) => {
  const [youtubeUrl, setYoutubeUrl] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();
  const videoUrl = useAppSelector((state) => state.singleLaunch.vidURLs);
  const metaTitle = useAppSelector((state) => state.singleLaunch.name);
  const metaDescription = useAppSelector((state) => state.singleLaunch.missionDescr);

  useEffect(() => {
    setYoutubeUrl(youtubeParser(videoUrl));
  }, [videoUrl]);

  useEffect(() => {
    dispatch(setLaunchData(singleLaunchData));
  }, []);

  return (
    <>
      <Head>
        <title>Launch - {metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <MainLayout header="secondary">
        <LaunchIntro />
        <div className="container fill">
          {youtubeUrl && <MyYouTube youtubeUrl={youtubeUrl} />}
          <LaunchInfo />
          <LaunchRocket />
          <Map />
        </div>
      </MainLayout>
    </>
  );
};

export default Launch;

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  try {
    const { data } = await axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/${params.id}`);

    const singleLaunchData = transformSingleLaunchData(data);

    return {
      props: { singleLaunchData }
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: launchesData } = await axios.get(
    `https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=18&offset=0`
  );

  const paths = launchesData.results.map(({ id }: { id: string }) => ({
    params: { id }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};
