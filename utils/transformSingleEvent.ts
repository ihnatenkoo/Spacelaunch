import { SingleEventData } from '../Interfaces';
interface InputSingleEvent {
  id: string;
  name: string;
  feature_image: string;
  description: string;
  date: string;
  video_url: string | null;
  news_url: string;

  launches: Array<ILaunches> | [];
  spacestations: Array<ISpacestations> | [];
}
interface ILaunches {
  name: string;
  mission_type: string;
  location: string;
  image: string;
}
interface ISpacestations {
  orbit: string;
}

export const transformSingleEvent = (data: InputSingleEvent): SingleEventData => {
  const { id, name, feature_image, description: mainDescr, date, video_url, news_url = '' } = data;
  const {
    name: rocketName = 'No info',
    mission_type = 'No info',
    location = 'No info',
    image: eventImg = ''
  } = data.launches[0] ?? {};
  const { orbit = 'No info' } = data.spacestations[0] ?? {};

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
