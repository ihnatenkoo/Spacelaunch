import Link from 'next/link';
import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './LaunchRocker.module.scss';

interface LaunchRocketProps {
  rocket: string;
  family: string;
  variant: string;
  description: string;
  officialLink: string;
  wikiLink: string;
  id: string;
}

const LaunchRocket: FC<LaunchRocketProps> = ({
  id,
  rocket,
  family,
  variant,
  description
}) => {
  return (
    <div className={styles.rocket}>
      <h2 className={styles.rocket__title}>{rocket}</h2>
      <h3 className={styles.rocket__subtitle}>
        Family: <span>{family}</span>
      </h3>
      <h3 className={styles.rocket__subtitle}>
        Configuration: <span>{variant}</span>
      </h3>
      <div className={styles.rocket__description}>{description}</div>
      <Button>
        <Link href={`/rocket/${[id]}`}>See Rocket Details</Link>
      </Button>
    </div>
  );
};

export default LaunchRocket;
