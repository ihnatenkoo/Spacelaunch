import Image from 'next/image';
import { FC } from 'react';

import { setLoadingTrigger } from '../../../redux/launches/actions/';

import { useAppDispatch } from '../../../hooks';

import styles from './Error.module.scss';
import errorImage from './error.gif';

export const Error: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<>
			<Image
				src={errorImage}
				width="200"
				height="200"
				alt="error picture"
				style={{ borderRadius: '30%' }}
			/>

			<h2 className={styles.error__title}>Data loading error</h2>

			<a
				onClick={() => dispatch(setLoadingTrigger(true))}
				className={styles.error__link}
			>
				Upload again
			</a>
		</>
	);
};
