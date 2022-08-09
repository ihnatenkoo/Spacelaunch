import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import styles from './Description.module.scss';

export const Description: FC<HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
}) => {
	return <div className={cn(styles.description, className)}>{children}</div>;
};
