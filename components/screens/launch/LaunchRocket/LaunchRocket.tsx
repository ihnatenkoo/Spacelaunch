import Link from 'next/link';
import React, { FC } from 'react';
import { Button } from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import styles from './LaunchRocker.module.scss';

export const LaunchRocket: FC = () => {
  const { rocketName, rocketFamily, rocketVariant, rocketDescr, rocketId } = useAppSelector(
    (state) => state.singleLaunch
  );

  return (
    <div className={styles.rocket}>
      <h2 className={styles.rocket__title}>{rocketName}</h2>
      <h3 className={styles.rocket__subtitle}>
        Family: <span>{rocketFamily}</span>
      </h3>
      <h3 className={styles.rocket__subtitle}>
        Configuration: <span>{rocketVariant || 'No info'}</span>
      </h3>
      <div className={styles.rocket__description}>{rocketDescr}</div>
      <Button>
        <Link href={`/rocket/${[rocketId]}`}>
          <a>See Rocket Details</a>
        </Link>
      </Button>
    </div>
  );
};
