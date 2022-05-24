import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MainLayout } from '../../layout';
import LaunchIntro from '../../components/LaunchIntro/LaunchIntro';
import LaunchInfo from '../../components/LaunchInfo/LaunchInfo';
import LaunchRocket from '../../components/LaunchRocket/LaunchRocket';
import Map from '../../components/Map/Map';

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
  rocketFamily: string;
  rocketVariant: string;
  rocketDescr: string;
  rocketLink: string;
  rocketWiki: string;
  eventCoordinates: { lat: number; lng: number };
  date: Date;
}

const Launch = ({
  name,
  image,
  date,
  type,
  orbit,
  location,
  launchComplex,
  rocketName,
  missionDescr,
  rocketFamily,
  rocketVariant,
  rocketDescr,
  rocketLink,
  rocketWiki,
  eventCoordinates
}: LaunchProps) => {
  return (
    <MainLayout header="secondary">
      <LaunchIntro name={name} image={image} date={date} />
      <div className="container fill">
        <LaunchInfo
          type={type}
          orbit={orbit}
          location={location}
          complex={launchComplex}
          rocket={rocketName}
          description={missionDescr}
        />
        <LaunchRocket
          rocket={rocketName}
          family={rocketFamily}
          variant={rocketVariant}
          description={rocketDescr}
          officialLink={rocketLink}
          wikiLink={rocketWiki}
        ></LaunchRocket>
        <Map eventCoordinates={eventCoordinates} />
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
  const { latitude, longitude, name: launchComplex } = data.pad;
  const { name: location } = data.pad.location;
  const { type, orbit, description: missionDescr } = data.mission;
  const {
    image_url: image,
    name: rocketName,
    family: rocketFamily,
    variant: rocketVariant,
    description: rocketDescr,
    info_url: rocketLink,
    wiki_url: rocketWiki
  } = data.rocket.configuration;

  const launchData = {
    name,
    image,
    date,
    type,
    orbit,
    location,
    launchComplex,
    rocketName,
    missionDescr,
    rocketFamily,
    rocketVariant,
    rocketDescr,
    rocketLink,
    rocketWiki,
    eventCoordinates: { lat: +latitude, lng: +longitude }
  };

  return {
    props: launchData
  };
};
