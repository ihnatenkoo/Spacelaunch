import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Description.module.scss';
import cn from 'classnames';

interface DescriptionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  return <div className={cn(styles.description, className)}>{children}</div>;
};
