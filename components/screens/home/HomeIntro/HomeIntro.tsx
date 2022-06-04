import Link from 'next/link';
import React, { FC } from 'react';
import { IntroLayout } from '../../../../layout';
import { Button } from '../../../../components';
import styles from './HomeIntro.module.scss';

interface HomeIntroProps {
  image?: string | undefined;
}

export const HomeIntro: FC<HomeIntroProps> = ({ image }) => {
  return (
    <IntroLayout image={image} className={styles.home}>
      <h1 className={styles.home__title}>
        Upcoming <br />
        Spaceflight Launches
      </h1>
      <h2 className={styles.home__subtitle}>
        View all launches available - including launches from the past and utilize
        <br />
        powerful search filters.
      </h2>
      <Button>
        <Link href={'#launches'}>
          <a>Show All Launches</a>
        </Link>
      </Button>
    </IntroLayout>
  );
};
