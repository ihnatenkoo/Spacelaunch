import { LaunchesData } from '../Interfaces';
interface InputLaunchesData {
  id: string;
  name: string;
  net: string;
  rocket: LaunchesRocket;
}
interface LaunchesRocket {
  configuration: { image_url: ImageType };
}

type ImageType = string | null;

export const transformLaunchesData = (data: Array<InputLaunchesData>): Array<LaunchesData> => {
  const transformData = data.map((item: InputLaunchesData) => {
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
