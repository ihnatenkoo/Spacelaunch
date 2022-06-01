import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './IntroLayout.module.scss';
import cn from 'classnames';

import introImage from '../public/images/home-intro.jpg';

interface IntroLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  image: string;
}

export const IntroLayout: FC<IntroLayoutProps> = ({
  children,
  image = introImage.src,
  className
}) => {
  return (
    <div className={styles.intro} style={{ background: `url(${image})` }}>
      <div className="container">
        <div className={cn(styles.intro__content, className)}>{children}</div>
      </div>
    </div>
  );
};
