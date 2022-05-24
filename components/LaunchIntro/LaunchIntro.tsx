import React, { FC } from 'react';
import { IntroLayout } from '../../layout';
import styles from './LaunchIntro.module.scss';

interface LaunchIntroProps {
  name: string;
  image: string;
  date: Date;
}

const LaunchIntro: FC<LaunchIntroProps> = ({ name, image, date }) => {
  return (
    <IntroLayout image={image}>
      <h1 className={styles.title}>{name}</h1>
      <h2 className={styles.subtitle}>Go for Launch</h2>
      <div className={styles.start}>
        <span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>
      </div>
    </IntroLayout>
  );
};

export default LaunchIntro;
