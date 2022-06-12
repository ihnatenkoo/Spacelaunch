import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { EventPageProps, SingleEventData } from '../../Interfaces';
import { MainLayout } from '../../layout';
import { EventInformation, EventIntro, Slider } from '../../components';
import { setEventData } from '../../redux/singleEvent/actions';
import axios from 'axios';

const Event: NextPage<EventPageProps> = ({ singleEvent }) => {
  const dispatch = useAppDispatch();
  const { recentEventsData } = useAppSelector((state) => state.recentEvents);

  useEffect(() => {
    dispatch(setEventData(singleEvent));
  }, [singleEvent]);

  return (
    <MainLayout header="secondary">
      <EventIntro />
      <div className="container fill">
        <EventInformation />
        <Slider data={recentEventsData} path={'event'} />
      </div>
    </MainLayout>
  );
};

export default Event;

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  try {
    const { data } = await axios.get(`https://spacelaunchnow.me/api/3.3.0/event/${params.id}`);

    const { id, name, feature_image, description: mainDescr, date, video_url, news_url } = data;
    const {
      name: rocketName = '',
      mission_type = '',
      location = '',
      image: eventImg = ''
    } = data.launches[0] ?? {};
    const { description: missionDescr = '', orbit = '' } = data.spacestations[0] ?? {};
    const singleEvent = {
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
      missionDescr,
      orbit
    };

    return {
      props: { singleEvent },
      revalidate: 43200
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: eventsData } = await axios.get(
    `https://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=15&offset=0`
  );

  const paths = eventsData.results.map(({ id }: SingleEventData) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: true
  };
};
