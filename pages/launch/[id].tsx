import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MainLayout } from '../../layout';
import { LaunchIntro, LaunchInfo, LaunchRocket, Map } from '../../components';
import { LaunchPageProps } from '../../Interfaces';
import { transformSingleLaunchData } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { setLaunchData } from '../../redux/singleLaunch/actions';

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
