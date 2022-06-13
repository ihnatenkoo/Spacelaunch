import { LaunchesData, SingleLaunchData, SingleRocketData } from '../Interfaces';

interface inputLaunchesData {
  id: string;
  name: string;
  net: string;
  rocket: {
    configuration: { image_url: string | null };
  };
}

export const transformLaunchesData = (data: Array<inputLaunchesData>): Array<LaunchesData> => {
  const transformData = data.map((item: inputLaunchesData) => {
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

export const transRecentEventsData = (data: any) => {
  const recentEventsData = data.map((item: any) => {
    const { id, name, date } = item;
    const image = item.launches[0]?.image ?? null;
    return { id, name, date, image };
  });

  return recentEventsData;
};

export const transformSingleLaunchData = (data: any): SingleLaunchData => {
  const { name, net: date, vidURLs } = data;
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

export const transformSingleEvent = (data: any) => {
  const { id, name, feature_image, description: mainDescr, date, video_url, news_url } = data;
  const {
    name: rocketName = '',
    mission_type = '',
    location = '',
    image: eventImg = ''
  } = data.launches[0] ?? {};
  const { orbit = '' } = data.spacestations[0] ?? {};
  return {
    id,
    name,
    feature_image,
    mainDescr,
    date,
    video_url,
    news_url,
    rocketName,
    mission_type,
    location,
    eventImg,
    orbit
  };
};
