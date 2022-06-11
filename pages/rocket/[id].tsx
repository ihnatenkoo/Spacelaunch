import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { RocketPageProps } from '../../Interfaces';
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

export const getServerSideProps: GetServerSideProps = async ({
  params
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
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
