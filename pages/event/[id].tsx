import axios from 'axios';
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

import { FETCH_RECENT_EVENTS } from '../../redux/recentEvents/recentEvents.slice';
import { SET_SINGLE_EVENT } from '../../redux/singleEvent/singleEvent.slice';

import { EventPageProps } from '../../Interfaces';

import { transformSingleEvent, youtubeParser } from '../../utils';

import { useAppDispatch, useAppSelector } from '../../hooks';

import {
	Error,
	EventInformation,
	EventIntro,
	Meta,
	MyYouTube,
	Slider,
	Spinner,
} from '../../components';

import { MainLayout } from '../../layout';

const Event: NextPage<EventPageProps> = ({ singleEvent }) => {
	const [videoId, setVideoId] = useState<string | undefined>(undefined);

	const dispatch = useAppDispatch();
	const { recentEventsData, isLoading, isError } = useAppSelector(
		(state) => state.recentEvents
	);
	const { video_url: videoUrl } = useAppSelector(
		(state) => state.singleEvent.eventInfo
	);
	const { name: metaTitle } = useAppSelector(
		(state) => state.singleEvent.eventInfo
	);
	const { mainDescr: metaDescription } = useAppSelector(
		(state) => state.singleEvent.eventInfo
	);

	useEffect(() => {
		if (recentEventsData.length === 0) dispatch(FETCH_RECENT_EVENTS());
	}, [recentEventsData, dispatch]);

	useEffect(() => {
		dispatch(SET_SINGLE_EVENT(singleEvent));
	}, [singleEvent, dispatch]);

	useEffect(() => {
		setVideoId(youtubeParser(videoUrl));
	}, [videoUrl]);

	return (
		<>
			<Meta title={`Event - ${metaTitle}`} description={metaDescription} />

			<MainLayout header="secondary">
				<EventIntro />
				<div className="container fill">
					{videoId && <MyYouTube videoId={videoId} />}
					<EventInformation />

					{isLoading && <Spinner />}
					{isError && <Error refreshCallback={FETCH_RECENT_EVENTS} />}
					{!isLoading && !isError && (
						<Slider data={recentEventsData} path={'event'} />
					)}
				</div>
			</MainLayout>
		</>
	);
};

export default Event;

export const getStaticProps: GetStaticProps = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	try {
		const { data } = await axios.get(
			`https://spacelaunchnow.me/api/3.3.0/event/${params.id}`
		);
		const singleEvent = transformSingleEvent(data);

		return {
			props: { singleEvent },
			revalidate: 43200,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: eventsData } = await axios.get(
		`https://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=15&offset=0`
	);

	const paths = eventsData.results.map(({ id }: { id: number }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};
