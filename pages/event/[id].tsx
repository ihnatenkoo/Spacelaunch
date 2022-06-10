import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import Slider from '../../components/ui/Slider/Slider';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { EventPageProps, SingleEventData } from '../../Interfaces';
import { MainLayout } from '../../layout';
import { setEventData } from '../../redux/singleEvent/actions';

const Event: NextPage<EventPageProps> = ({ singleEvent }) => {
  const dispatch = useAppDispatch();
  const { recentEventsData } = useAppSelector((state) => state.recentEvents);

  useEffect(() => {
    dispatch(setEventData(singleEvent));
  }, []);

  return (
    <MainLayout header="secondary">
      <div className="container fill">
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

    const { id, name, feature_image, description, date, video_url } = data;
    const singleEvent = { id, name, feature_image, description, date, video_url };

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
    fallback: false
  };
};
