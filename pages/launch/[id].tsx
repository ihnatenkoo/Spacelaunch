import axios from 'axios';
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

import { setLaunchData } from '../../redux/singleLaunch/actions';

import { LaunchPageProps } from '../../Interfaces';

import { transformSingleLaunchData, youtubeParser } from '../../utils';

import { useAppDispatch, useAppSelector } from '../../hooks';

import {
	LaunchInfo,
	LaunchIntro,
	LaunchRocket,
	Map,
	Meta,
	MyYouTube,
} from '../../components';

import { MainLayout } from '../../layout';

const Launch: NextPage<LaunchPageProps> = ({ singleLaunchData }) => {
	const [videoId, setVideoId] = useState<string | undefined>(undefined);

	const dispatch = useAppDispatch();
	const videoUrl = useAppSelector((state) => state.singleLaunch.vidURLs);
	const metaTitle = useAppSelector((state) => state.singleLaunch.name);
	const metaDescription = useAppSelector(
		(state) => state.singleLaunch.missionDescr
	);

	useEffect(() => {
		setVideoId(youtubeParser(videoUrl));
	}, [videoUrl]);

	useEffect(() => {
		dispatch(setLaunchData(singleLaunchData));
	}, [singleLaunchData, dispatch]);

	return (
		<>
			<Meta title={`Launch - ${metaTitle}`} description={metaDescription} />

			<MainLayout header="secondary">
				<LaunchIntro />
				<div className="container fill">
					{videoId && <MyYouTube videoId={videoId} />}
					<LaunchInfo />
					<LaunchRocket />
					<Map />
				</div>
			</MainLayout>
		</>
	);
};

export default Launch;

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
			`https://spacelaunchnow.me/api/3.3.0/launch/${params.id}`
		);

		const singleLaunchData = transformSingleLaunchData(data);

		return {
			props: { singleLaunchData },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: launchesData } = await axios.get(
		`https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=18&offset=0`
	);

	const paths = launchesData.results.map(({ id }: { id: string }) => ({
		params: { id },
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};
