import { FC } from 'react';
import { LaunchesData } from '../../../../Interfaces';
import { Spinner, Error, Title, Card } from '../../../../components';
import { useAppSelector } from '../../../../hooks/';
import s from './HomeLaunches.module.scss';

export const HomeLaunches: FC = () => {
  const { launchesData, isLoading, isError, isEnd } = useAppSelector((state) => state.launches);

  return (
    <div id="launches">
      <Title className={s.title}>Spaceflight Launches</Title>
      <div id="launches" className={s.inner}>
        {launchesData.map((launch: LaunchesData) => {
          return <Card size="m" key={launch.id} data={launch} path={'launch'} />;
        })}
      </div>
      <div className={s.end}>
        {isError && <Error />}
        {isLoading && <Spinner />}
        {isEnd && <h3 className={s.end__title}>All launches have been uploaded</h3>}
      </div>
    </div>
  );
};
