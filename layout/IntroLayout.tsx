import React, { FC, ReactNode } from 'react';
import styles from './IntroLayout.module.scss';

import introImage from '../public/images/home-intro.jpg';

interface IntroLayoutProps {
  children: ReactNode;
  image?: string;
}

export const IntroLayout: FC<IntroLayoutProps> = ({ children, image }) => {
  const background = image || introImage.src;

  return (
    <section className={styles.intro} style={{ background: `url(${background})` }}>
      <div className="container">
        <div className={styles.intro__content}>{children}</div>
      </div>
    </section>
  );
};
