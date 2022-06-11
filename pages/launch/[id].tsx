import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { LaunchPageProps } from '../../Interfaces';
import { MainLayout } from '../../layout';
import { useAppDispatch } from '../../hooks';
import { transformSingleLaunchData } from '../../utils';
import { setLaunchData } from '../../redux/singleLaunch/actions';
import { LaunchIntro, LaunchInfo, LaunchRocket, Map } from '../../components';

import axios from 'axios';

const Launch: NextPage<LaunchPageProps> = ({ singleLaunchData }) => {
  const dispatch = useAppDispatch();

  dispatch(setLaunchData(singleLaunchData));

  return (
    <MainLayout header="secondary">
      <LaunchIntro />
      <div className="container fill">
        <LaunchInfo />
        <LaunchRocket />
        <Map />
      </div>
    </MainLayout>
  );
};

export default Launch;

export const getServerSideProps: GetServerSideProps = async ({
  params
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
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
