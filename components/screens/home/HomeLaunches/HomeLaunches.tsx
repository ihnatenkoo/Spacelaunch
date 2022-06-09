import { FC } from 'react';
import { LaunchesData } from '../../../../Interfaces';
import { Card } from '../../../../components';
import styles from './HomeLaunches.module.scss';
import { Spinner, Error } from '../../../../components';
import { useAppSelector } from '../../../../hooks/';

export const HomeLaunches: FC = () => {
  const { launchesData, isLoading, isError, isEnd } = useAppSelector((state) => state.launches);

  return (
    <>
      <h2 id="launches" className={styles.title}>
        Spaceflight Launches
      </h2>
      <div className={styles.inner}>
        {launchesData.map((launch: LaunchesData) => {
          return <Card size="m" key={launch.id} data={launch} path={'launch'} />;
        })}
      </div>
      <div className={styles.end}>
        {isError && <Error />}
        {isLoading && <Spinner />}
        {isEnd && <h2 className={styles.end__title}>All launches have been uploaded</h2>}
      </div>
    </>
  );
};
