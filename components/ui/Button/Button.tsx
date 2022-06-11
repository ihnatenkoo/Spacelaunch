import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  href?: URL | string;
  disabled?: boolean;
  targetBlank?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  href = '#',
  targetBlank
}) => {
  return (
    <button onClick={onClick} className={cn(s.btn, { [s.disabled]: disabled })} type="button">
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
