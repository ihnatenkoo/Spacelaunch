import cn from 'classnames';
import Link from 'next/link';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import s from './Button.module.scss';

interface ButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	href?: URL | string;
	disabled?: boolean;
	targetBlank?: boolean;
	onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	disabled = false,
	targetBlank = false,
	href = '#',
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(s.btn, { [s.disabled]: disabled })}
			type="button"
		>
			<Link href={href}>
				<a
					className={cn(s.link, { [s.disabled]: disabled })}
					target={targetBlank ? '_blank' : '_self'}
				>
					{children}
				</a>
			</Link>
		</button>
	);
};
