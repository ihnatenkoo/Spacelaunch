import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  gradient?: boolean;
}

export const Tag: FC<TagProps> = ({ children, gradient, className }) => {
  const tagStyle = cn(styles.tag, className, {
    [styles.gradient]: gradient
  });

  return <div className={tagStyle}>{children}</div>;
};
