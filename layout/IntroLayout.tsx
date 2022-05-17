import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import { LayoutProps } from './LayoutProps';
import styles from './IntroLayout.module.scss';

interface IntroLayoutProps extends LayoutProps {
  image: StaticImageData;
}

const IntroLayout: FC<IntroLayoutProps> = ({ children, image }) => {
  return (
    <section className={styles.intro} style={{ background: `url(${image.src})` }}>
      <div className="container">
        <div className={styles.intro__content}>{children}</div>
      </div>
    </section>
  );
};

export default IntroLayout;
