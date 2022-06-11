import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './IntroLayout.module.scss';
import cn from 'classnames';

import introImage from '../public/images/home-intro.jpg';

interface IntroLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string | undefined;
  textAlignLeft?: boolean;
}

export const IntroLayout: FC<IntroLayoutProps> = ({
  children,
  image = introImage.src,
  className,
  textAlignLeft
}) => {
  return (
    <div className={styles.intro} style={{ background: `url(${image}) center / cover` }}>
      <div className="container intro">
        <div className={cn(styles.intro__content, className, { [styles.left]: textAlignLeft })}>
          {children}
        </div>
      </div>
    </div>
  );
};
