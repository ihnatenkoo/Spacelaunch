import React, { FC } from 'react';
import { Tag, Title } from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import { Description } from '../../../ui/Description/Description';
import styles from './LaunchInfo.module.scss';

export const LaunchInfo: FC = () => {
  const { orbit, type, launchComplex, rocketName, location, missionDescr } = useAppSelector(
    (state) => state.singleLaunch
  );

  return (
    <div className={styles.launch}>
      <Title mb={20}>Overview</Title>
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
      <Description>{missionDescr}</Description>
    </div>
  );
};
