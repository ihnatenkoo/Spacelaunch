import { FC } from 'react';
import { LaunchesData, HomeProps } from '../../../../Interfaces';
import { Card } from '../../../../components';
import styles from './HomeLaunches.module.scss';
import Spinner from '../../../Spinner/Spinner';

interface HomeLaunchesProps extends HomeProps {
  isLoading: boolean;
  isEnd: boolean;
}

export const HomeLaunches: FC<HomeLaunchesProps> = ({ launchesData, isLoading, isEnd }) => {
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
      <div className={styles.end}>
        {isLoading && <Spinner />}
        {isEnd && <h2 className={styles.end__title}>All launches have been uploaded</h2>}
      </div>
    </>
  );
};
