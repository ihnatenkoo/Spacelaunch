import { FC } from 'react';

import { SET_LOADING_TRIGGER } from '../../../../redux/launches/launches.slice';

import { LaunchesData } from '../../../../Interfaces';

import { useAppSelector } from '../../../../hooks/';

import { Card, Error, Spinner, Title } from '../../../../components';

import s from './HomeLaunches.module.scss';

export const HomeLaunches: FC = () => {
	const { launchesData, isLoading, isError, isEnd } = useAppSelector(
		(state) => state.launches
	);

	return (
		<div id="launches" className={s.launches}>
			<Title view="h2" className={s.launches__title}>
				Spaceflight Launches
			</Title>
			<div className={s.launches__inner}>
				{launchesData.map((launch: LaunchesData) => {
					return (
						<Card size="m" key={launch.id} data={launch} path={'launch'} />
					);
				})}
			</div>

			{isLoading && <Spinner />}
			{isError && <Error refreshCallback={() => SET_LOADING_TRIGGER(true)} />}
			{isEnd && (
				<span className={s.launches__alert}>
					All launches have been uploaded
				</span>
			)}
		</div>
	);
};
