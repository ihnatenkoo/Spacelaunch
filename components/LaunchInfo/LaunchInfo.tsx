import React, { FC } from 'react';
import Tag from '../Tag/Tag';
import styles from './LaunchInfo.module.scss';

interface LaunchInfoProps {
  type: string;
  orbit: string;
  location: string;
  launchComplex: string;
  rocketName: string;
  missionDescr: string;
}

const LaunchInfo: FC<LaunchInfoProps> = ({
  type,
  orbit,
  location,
  launchComplex,
  rocketName,
  missionDescr
}) => {
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

export default LaunchInfo;
