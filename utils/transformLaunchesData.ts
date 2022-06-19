import { LaunchesData } from '../Interfaces';

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
