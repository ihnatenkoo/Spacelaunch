import dayjs from 'dayjs';
import Image from 'next/image';
import { FC } from 'react';

import { useAppSelector } from '../../../../hooks';

import { Description } from '../../../ui/Description/Description';
import { Tag } from '../../../ui/Tag/Tag';
import { Title } from '../../../ui/Title/Title';

import placeholder from '../../../../public/images/img-placeholder.jpg';

import s from './EventInformation.module.scss';

export const EventInformation: FC = () => {
	const { rocketName, eventImg, date, orbit, mission_type, mainDescr } =
		useAppSelector((state) => state.singleEvent.eventInfo);

	const img = eventImg || placeholder;
	const description: string =
		mainDescr.length > 260 ? mainDescr.slice(0, 260) + '...' : mainDescr;

	return (
		<section className={s.event}>
			<Title view="h2" className={s.event__title}>
				Related Information
			</Title>
			<div className={s.event__inner}>
				<Image src={img} width={580} height={324} alt={rocketName} />
				<div className={s.event__info}>
					<Title view="h3" className={s.event__info_title}>
						{rocketName}
					</Title>
					<Tag className={s.event__tag}>
						{dayjs.utc(date).format('MMM DD, YYYY, h:mm a')}
					</Tag>
					<h4 className={s.event__subtitle}>
						Destination: <span>{orbit || 'No info'}</span>
					</h4>
					<h4 className={s.event__subtitle}>
						Mission: <span>{mission_type || 'No info'}</span>
					</h4>
					<Description className={s.event__descr}>
						{description || 'Description not Available'}
					</Description>
				</div>
			</div>
		</section>
	);
};
