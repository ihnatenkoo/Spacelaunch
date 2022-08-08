import { FC, HTMLAttributes } from 'react';
import styles from './Description.module.scss';
import cn from 'classnames';

export const Description: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return <div className={cn(styles.description, className)}>{children}</div>;
};
