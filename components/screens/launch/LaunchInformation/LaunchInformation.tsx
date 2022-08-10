import React, { FC } from 'react';

import { renderText } from '../../../../utils';

import { useAppSelector } from '../../../../hooks';

import { Description, Tag, Title } from '../../../../components';

import s from './LaunchInformation.module.scss';

export const LaunchInfo: FC = () => {
	const { orbit, type, launchComplex, rocketName, location, missionDescr } =
		useAppSelector((state) => state.singleLaunch.launchInfo);

	return (
		<div className={s.launch}>
			<Title view="h2" className={s.launch__title}>
				Overview
			</Title>
			<h3 className={s.launch__subtitle}>
				Destination: <span>{orbit}</span>
			</h3>
			<h3 className={s.launch__subtitle}>
				Mission: <span>{type}</span>
			</h3>
			<div className={s.launch__info}>
				<Tag gradient className={s.tag}>
					{renderText(launchComplex)}
				</Tag>
				<Tag gradient className={s.tag}>
					{renderText(orbit)}
				</Tag>
				<Tag gradient className={s.tag}>
					{renderText(rocketName)}
				</Tag>
			</div>
			<Tag className={s.launch__location}>{renderText(location)}</Tag>
			<Description>{missionDescr}</Description>
		</div>
	);
};
