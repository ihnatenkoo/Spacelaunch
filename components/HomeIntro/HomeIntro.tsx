import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import IntroLayout from '../../layout/IntroLayout';
import Button from '../Button/Button';
import styles from './HomeIntro.module.scss';

interface IHomeProps {
  image: StaticImageData;
}

const HomeIntro: FC<IHomeProps> = ({ image }) => {
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
        <Link href={'#'}>Show All Launches</Link>
      </Button>
    </IntroLayout>
  );
};

export default HomeIntro;
