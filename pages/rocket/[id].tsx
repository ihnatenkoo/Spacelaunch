import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { RocketPageProps, SingleRocketData } from '../../Interfaces';
import { useAppDispatch } from '../../hooks';
import { MainLayout } from '../../layout';
import { transformSingleRocketData } from '../../utils';
import { setRocketData } from '../../redux/singleRocket/actions';
import { RocketInfo, RocketIntro } from '../../components';

import axios from 'axios';

const Rocket: NextPage<RocketPageProps> = ({ singleRocketData }) => {
  const dispatch = useAppDispatch();

  dispatch(setRocketData(singleRocketData));

  return (
    <MainLayout header="secondary">
      <RocketIntro />
      <div className="container fill">
        <RocketInfo />
      </div>
    </MainLayout>
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

  const { data } = await axios.get(
    `https://spacelaunchnow.me/api/ll/2.1.0/config/launcher/${params.id}`
  );

  const singleRocketData = transformSingleRocketData(data);

  return {
    props: { singleRocketData }
  };
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
