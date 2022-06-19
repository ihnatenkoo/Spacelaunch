import { SingleLaunchData } from '../Interfaces';

export const transformSingleLaunchData = (data: any): SingleLaunchData => {
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
