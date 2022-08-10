import { Action, AsyncThunkAction } from '@reduxjs/toolkit';
import Image from 'next/image';
import { FC } from 'react';

import { EventsData } from '../../../Interfaces';

import { useAppDispatch } from '../../../hooks';

import styles from './Error.module.scss';
import errorImage from './error.gif';

interface IErrorProps {
	refreshCallback: () =>
		| Action<string>
		| AsyncThunkAction<EventsData[], void, Record<string, unknown>>;
}

export const Error: FC<IErrorProps> = ({ refreshCallback }) => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.error}>
			<Image
				src={errorImage}
				width="200"
				height="200"
				alt="error picture"
				style={{ borderRadius: '30%' }}
			/>

			<h2 className={styles.error__title}>Data loading error</h2>

			<a
				onClick={() => dispatch(refreshCallback())}
				className={styles.error__link}
			>
				Upload again
			</a>
		</div>
	);
};
