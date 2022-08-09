import { FC } from 'react';

import Logo from '../../public/icons/main-logo.svg';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__inner}>
					<Logo className={styles.footer__logo} />
					<span className={styles.footer__copyright}>© 2021 Copyright</span>
				</div>
			</div>
		</footer>
	);
};
