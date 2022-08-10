import axios from 'axios';
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';

import { SET_SINGLE_ROCKET } from '../../redux/singleRocket/singleRocket.slice';

import { RocketPageProps } from '../../Interfaces';

import { transformSingleRocketData } from '../../utils';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { Meta, RocketInfo, RocketIntro } from '../../components';

import { MainLayout } from '../../layout';

const Rocket: NextPage<RocketPageProps> = ({ singleRocketData }) => {
	const dispatch = useAppDispatch();
	const { fullName: metaTitle, description: metaDescription } = useAppSelector(
		(state) => state.singleRocket.rocketInfo
	);

	useEffect(() => {
		dispatch(SET_SINGLE_ROCKET(singleRocketData));
	}, [singleRocketData, dispatch]);

	return (
		<>
			<Meta title={`Rocket - ${metaTitle}`} description={metaDescription} />

			<MainLayout header="secondary">
				<RocketIntro />
				<div className="container fill">
					<RocketInfo />
				</div>
			</MainLayout>
		</>
	);
};

export default Rocket;

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
			`https://spacelaunchnow.me/api/ll/2.1.0/config/launcher/${params.id}`
		);

		const singleRocketData = transformSingleRocketData(data);

		return {
			props: { singleRocketData },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await axios.get(
		'https://spacelaunchnow.me/api/ll/2.1.0/config/launcher/?limit=15&offset=0'
	);

	const paths = data.results.map(({ id }: { id: number }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};
