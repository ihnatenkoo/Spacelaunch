import { LaunchesData, SingleLaunchData, SingleRocketData } from '../Interfaces';

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

export const transformSingleRocketData = (data: any): SingleRocketData => {
  const {
    image_url: image,
    name,
    full_name: fullName,
    maiden_flight: firstFlight,
    description,
    family,
    variant,
    alias,
    min_stage,
    max_stage,
    length,
    diameter,
    launch_mass,
    to_thrust,
    apogee,
    leo_capacity,
    vehicle_range,
    total_launch_count,
    successful_launches,
    failed_launches
  } = data;

  const { name: nameCompany, abbrev: abbrevCompany, type, country_code } = data.manufacturer;

  const singleRocketData = {
    name,
    fullName,
    description,
    image,
    firstFlight,
    nameCompany,
    abbrevCompany,
    type,
    country_code,
    family,
    variant,
    alias,
    min_stage,
    max_stage,
    length,
    diameter,
    launch_mass,
    to_thrust,
    apogee,
    leo_capacity,
    vehicle_range,
    total_launch_count,
    successful_launches,
    failed_launches
  };

  return singleRocketData;
};
