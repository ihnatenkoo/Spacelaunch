import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { useEffect } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { RocketPageProps } from '../../Interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MainLayout } from '../../layout';
import { transformSingleRocketData } from '../../utils';
import { setRocketData } from '../../redux/singleRocket/actions';
import { RocketInfo, RocketIntro } from '../../components';

import axios from 'axios';

const Rocket: NextPage<RocketPageProps> = ({ singleRocketData }) => {
  const dispatch = useAppDispatch();
  const metaTitle = useAppSelector((state) => state.singleRocket.fullName);
  const metaDescription = useAppSelector((state) => state.singleRocket.description);

  useEffect(() => {
    dispatch(setRocketData(singleRocketData));
  }, []);

  return (
    <>
      <Head>
        <title>Rocket - {metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <MainLayout header="secondary">
        <RocketIntro />
        <div className="container fill">
          <RocketInfo />
        </div>
      </MainLayout>
    </>
  );
};

export default Rocket;

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  try {
    const { data } = await axios.get(
      `https://spacelaunchnow.me/api/ll/2.1.0/config/launcher/${params.id}`
    );

    const singleRocketData = transformSingleRocketData(data);

    return {
      props: { singleRocketData }
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(
    'https://spacelaunchnow.me/api/ll/2.1.0/config/launcher/?limit=15&offset=0'
  );

  const paths = data.results.map(({ id }: { id: number }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};
