import React, { FC } from 'react';
import { Tag } from '../../../../components';
import styles from './LaunchInfo.module.scss';

interface LaunchInfoProps {
  rocket: string;
  type: string;
  orbit: string;
  location: string;
  complex: string;
  description: string;
}

export const LaunchInfo: FC<LaunchInfoProps> = ({
  rocket,
  type,
  orbit,
  location,
  complex,
  description
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
          {complex}
        </Tag>
        <Tag gradient className={styles.tag}>
          {orbit}
        </Tag>
        <Tag gradient className={styles.tag}>
          {rocket}
        </Tag>
      </div>
      <Tag className={styles.launch__location}>{location}</Tag>
      <div className={styles.launch__description}>{description}</div>
    </div>
  );
};
