import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

interface TagProps {
  children: ReactNode;
  gradient?: boolean;
}

const Tag: FC<TagProps> = ({ children, gradient }) => {
  const tagStyle = cn(styles.tag, {
    [styles.gradient]: gradient
  });

  return <div className={tagStyle}>{children}</div>;
};

export default Tag;
