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
