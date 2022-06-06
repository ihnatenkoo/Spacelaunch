import React, { FC } from 'react';
import { Tag } from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import styles from './LaunchInfo.module.scss';

export const LaunchInfo: FC = () => {
  const { orbit, type, launchComplex, rocketName, location, missionDescr } = useAppSelector(
    (state) => state.singleLaunch
  );

  return (
    <div className={styles.launch}>
      <h2 className={styles.launch__title}>Overview</h2>
      <h3 className={styles.launch__subtitle}>
        Destination: <span>{orbit}</span>
      </h3>
      <h3 className={styles.launch__subtitle}>
        Mission: <span>{type}</span>
      </h3>
      <div className={styles.launch__info}>
        <Tag gradient className={styles.tag}>
          {launchComplex}
        </Tag>
        <Tag gradient className={styles.tag}>
          {orbit}
        </Tag>
        <Tag gradient className={styles.tag}>
          {rocketName}
        </Tag>
      </div>
      <Tag className={styles.launch__location}>{location}</Tag>
      <div className={styles.launch__description}>{missionDescr}</div>
    </div>
  );
};
