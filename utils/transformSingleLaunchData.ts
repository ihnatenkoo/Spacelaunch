import { SingleLaunchData } from '../Interfaces';
interface InputSingleLaunch {
  id: string;
  name: string;
  net: string;
  vidURLs: string | [];

  pad: LaunchPad;
  mission: LaunchMission | null;
  rocket: LaunchRocket;
}
interface LaunchPad {
  name: string;
  latitude: string;
  longitude: string;

  location: { name: string };
}
interface LaunchMission {
  type: string;
  orbit: string;
  description: string;
}

interface LaunchRocket {
  configuration: {
    id: string;
    image_url: string;
    name: string;
    family: string;
    variant: string;
    description: string;
  };
}

export const transformSingleLaunchData = (data: InputSingleLaunch): SingleLaunchData => {
  const { id, name, net: date, vidURLs } = data;
  const { latitude, longitude, name: launchComplex } = data.pad;
  const { name: location } = data.pad.location;
  const {
    type = 'No info',
    orbit = 'No info',
    description: missionDescr = 'Description not available'
  } = data.mission ?? {};

  const {
    id: rocketId,
    image_url: image,
    name: rocketName,
    family: rocketFamily,
    variant: rocketVariant,
    description: rocketDescr
  } = data.rocket.configuration;

  const singleLaunchData = {
    id,
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
    eventCoordinates: { lat: +latitude, lng: +longitude },
    rocketId,
    vidURLs: vidURLs[0] ?? null
  };

  return singleLaunchData;
};
