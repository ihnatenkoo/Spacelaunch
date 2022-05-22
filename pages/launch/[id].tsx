import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MainLayout } from '../../layout';
import LaunchIntro from '../../components/LaunchIntro/LaunchIntro';
import LaunchInfo from '../../components/LaunchInfo/LaunchInfo';

interface LaunchProps {
  name: string;
  image: string;
  map: string;
  type: string;
  orbit: string;
  location: string;
  launchComplex: string;
  rocketName: string;
  missionDescr: string;
  date: Date;
}

const Launch = ({
  name,
  image,
  date,
  map,
  type,
  orbit,
  location,
  launchComplex,
  rocketName,
  missionDescr
}: LaunchProps) => {
  return (
    <MainLayout header="secondary">
      <LaunchIntro name={name} image={image} date={date} />
      <div className="container fill">
        <LaunchInfo
          type={type}
          orbit={orbit}
          location={location}
          launchComplex={launchComplex}
          rocketName={rocketName}
          missionDescr={missionDescr}
        />
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

  const { data } = await axios.get(
    `https://spacelaunchnow.me/api/3.3.0/launch/${params.id}`
  );

  const { name, net: date } = data;
  const { image_url: image, name: rocketName } = data.rocket.configuration;
  const { map_url: map, name: launchComplex } = data.pad;
  const { type, orbit, description: missionDescr } = data.mission;
  const { name: location } = data.pad.location;

  const launchData = {
    name,
    image,
    date,
    map,
    type,
    orbit,
    location,
    launchComplex,
    rocketName,
    missionDescr
  };

  return {
    props: launchData
  };
};
