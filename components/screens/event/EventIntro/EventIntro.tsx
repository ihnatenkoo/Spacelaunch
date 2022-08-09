import dayjs from 'dayjs';
import { FC } from 'react';

import { isValidHttpUrl } from '../../../../utils/isValidHttpUrl';

import { useAppSelector } from '../../../../hooks';

import { Button, Description, Tag, Title } from '../../../../components';

import { IntroLayout } from '../../../../layout';

import s from './EventIntro.module.scss';

export const EventIntro: FC = () => {
	const { name, feature_image, date, news_url, location } = useAppSelector(
		(state) => state.singleEvent
	);

	return (
		<IntroLayout image={feature_image}>
			<Title view="h1" className={s.title}>
				{name}
			</Title>

			<Tag>{dayjs.utc(date).format('MMM DD, YYYY, h:mm a')}</Tag>
			<Description className={s.subtitle}>{location}</Description>
			<Button
				disabled={!isValidHttpUrl(news_url)}
				href={isValidHttpUrl(news_url)}
				targetBlank
			>
				Read On Site
			</Button>
		</IntroLayout>
	);
};
