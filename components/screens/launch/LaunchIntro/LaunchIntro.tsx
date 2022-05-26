import React, { FC } from 'react';
import { IntroLayout } from '../../../../layout';
import styles from './LaunchIntro.module.scss';

interface LaunchIntroProps {
  name: string;
  image: string;
  date: Date;
}

export const LaunchIntro: FC<LaunchIntroProps> = ({ name, image, date }) => {
  return (
    <IntroLayout image={image} className={styles.launch}>
      <h1 className={styles.launch__title}>{name}</h1>
      <h2 className={styles.launch__subtitle}>Go for Launch</h2>
      <div className={styles.launch__start}>
        <span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>
      </div>
    </IntroLayout>
  );
};
