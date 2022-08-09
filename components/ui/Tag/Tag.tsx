import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Tag.module.scss';

interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	gradient?: boolean;
}

export const Tag: FC<TagProps> = ({ children, gradient, className }) => {
	const tagStyle = cn(styles.tag, className, {
		[styles.gradient]: gradient,
	});

	return <span className={tagStyle}>{children}</span>;
};
