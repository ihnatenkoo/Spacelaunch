import { LaunchesData, SingleLaunchData } from '../Interfaces';

export const transformLaunchesData = (data: any): Array<LaunchesData> => {
  const transformData = data.map((item: any) => {
    const { id, name, net: date } = item;
    const { image_url: image } = item.rocket.configuration;

    return {
      name,
      image,
      id,
      date
    };
  });

  return transformData;
};

export const transformSingleLaunchData = (data: any): SingleLaunchData => {
  const { name, net: date } = data;
  const { latitude, longitude, name: launchComplex } = data.pad;
  const { name: location } = data.pad.location;
  const {
    type = 'No info',
    orbit = 'No info',
    description: missionDescr = 'Description not available'
  } = data.mission || {};

  const {
    id: rocketId,
    image_url: image,
    name: rocketName,
    family: rocketFamily,
    variant: rocketVariant,
    description: rocketDescr
  } = data.rocket.configuration;

  const singleLaunchData = {
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
    rocketId
  };

  return singleLaunchData;
};
