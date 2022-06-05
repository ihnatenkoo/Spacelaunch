import { LaunchesData } from '../Interfaces';

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
