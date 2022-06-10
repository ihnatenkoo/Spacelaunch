import { FC } from 'react';
import { LaunchesData } from '../../../../Interfaces';
import { Card } from '../../../../components';
import styles from './HomeLaunches.module.scss';
import { Spinner, Error } from '../../../../components';
import { useAppSelector } from '../../../../hooks/';
import { Title } from '../../../../components';

export const HomeLaunches: FC = () => {
  const { launchesData, isLoading, isError, isEnd } = useAppSelector((state) => state.launches);

  return (
    <div id="launches">
      <Title mb={40}>Spaceflight Launches</Title>
      <div id="launches" className={styles.inner}>
        {launchesData.map((launch: LaunchesData) => {
          return <Card size="m" key={launch.id} data={launch} path={'launch'} />;
        })}
      </div>
      <div className={styles.end}>
        {isError && <Error />}
        {isLoading && <Spinner />}
        {isEnd && <h3 className={styles.end__title}>All launches have been uploaded</h3>}
      </div>
    </div>
  );
};
