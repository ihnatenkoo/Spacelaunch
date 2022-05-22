import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MainLayout } from '../../layout';
import LaunchIntro from '../../components/LaunchIntro/LaunchIntro';

interface LaunchProps {
  launchData: {
    name: string;
    image: string;
    id: string;
    map: string;
    date: Date;
  };
}

const Launch = ({ launchData }: LaunchProps) => {
  const { name, image, id, date, map } = launchData;

  return (
    <MainLayout header="secondary">
      <LaunchIntro name={name} image={image} date={date} />
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

  const { data } = await axios.get(
    `https://spacelaunchnow.me/api/3.3.0/launch/${params.id}`
  );

  const { id, name, net: date } = data;
  const { image_url: image } = data.rocket.configuration;
  const { map_url: map } = data.pad;

  const launchData = {
    name,
    image,
    id,
    date,
    map
  };

  return {
    props: { launchData }
  };
};
