import Link from 'next/link';
import React, { FC } from 'react';
import { Button, Title } from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import { Description } from '../../../ui/Description/Description';
import styles from './LaunchRocker.module.scss';

export const LaunchRocket: FC = () => {
  const { rocketName, rocketFamily, rocketVariant, rocketDescr, rocketId } = useAppSelector(
    (state) => state.singleLaunch
  );

  return (
    <div className={styles.rocket}>
      <Title mb={20}>{rocketName}</Title>
      <div className={styles.rocket__subtitle}>
        <h3>
          Family: <span>{rocketFamily}</span>
        </h3>
        <h3>
          Configuration: <span>{rocketVariant || 'No info'}</span>
        </h3>
      </div>

      <Description mb={30}>{rocketDescr}</Description>

      <Button>
        <Link href={`/rocket/${[rocketId]}`}>
          <a>See Rocket Details</a>
        </Link>
      </Button>
    </div>
  );
};
