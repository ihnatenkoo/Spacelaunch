import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { EventPageProps, SingleEventData } from '../../Interfaces';
import { MainLayout } from '../../layout';
import { EventInformation, EventIntro, Slider } from '../../components';
import { setEventData } from '../../redux/singleEvent/actions';
import MyYouTube from '../../components/MyYouTube/MyYouTube';

import axios from 'axios';
import { transformSingleEvent, transRecentEventsData } from '../../utils';
import { setRecentEventsData } from '../../redux/recentEvents/actions';

const Event: NextPage<EventPageProps> = ({ singleEvent }) => {
  const dispatch = useAppDispatch();
  const recentEventsData = useAppSelector((state) => state.recentEvents.recentEventsData);
  const videoUrl = useAppSelector((state) => state.singleEvent.video_url);

  const clientFetchSlides = async () => {
    try {
      const { data } = await axios.get(
        `https://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=15&offset=0`
      );
      const eventsData = transRecentEventsData(data.results);
      dispatch(setRecentEventsData(eventsData));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (recentEventsData.length === 0) clientFetchSlides();
  }, [recentEventsData]);

  useEffect(() => {
    dispatch(setEventData(singleEvent));
  }, [singleEvent]);

  return (
    <MainLayout header="secondary">
      <EventIntro />
      <div className="container fill">
        <MyYouTube videoUrl={videoUrl} />
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
    const singleEvent = transformSingleEvent(data);

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
    fallback: 'blocking'
  };
};
