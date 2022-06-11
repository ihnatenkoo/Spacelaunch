import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gradient?: boolean;
}

export const Tag: FC<TagProps> = ({ children, gradient, className }) => {
  const tagStyle = cn(styles.tag, className, {
    [styles.gradient]: gradient
  });

  return <span className={tagStyle}>{children}</span>;
};
