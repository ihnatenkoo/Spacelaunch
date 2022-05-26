import { FC } from 'react';
import { LaunchesData, HomeProps } from '../../../../Interfaces';
import { Card } from '../../../../components';
import styles from './HomeLaunches.module.scss';

export const HomeLaunches: FC<HomeProps> = ({ launchesData }) => {
  return (
    <>
      <h2 id="launches" className={styles.title}>
        Spaceflight Launches
      </h2>
      <div className={styles.inner}>
        {launchesData.map((launch: LaunchesData) => {
          return <Card size="m" key={launch.id} launch={launch}></Card>;
        })}
      </div>
    </>
  );
};
