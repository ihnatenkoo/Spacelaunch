import Link from 'next/link';
import React, { FC } from 'react';
import { IntroLayout } from '../../layout/';
import Button from '../Button/Button';
import styles from './HomeIntro.module.scss';

interface HomeIntroProps {
  image?: string;
}

const HomeIntro: FC<HomeIntroProps> = ({ image }) => {
  return (
    <IntroLayout image={image}>
      <h1 className={styles.title}>
        Upcoming <br />
        Spaceflight Launches
      </h1>
      <h2 className={styles.subtitle}>
        View all launches available - including launches from the past and utilize
        <br />
        powerful search filters.
      </h2>
      <Button>
        <Link href={'#launches'}>Show All Launches</Link>
      </Button>
    </IntroLayout>
  );
};

export default HomeIntro;
