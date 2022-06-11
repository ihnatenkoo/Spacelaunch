import React, { FC } from 'react';
import { Button, Title } from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import { Description } from '../../../ui/Description/Description';
import s from './LaunchRocker.module.scss';

export const LaunchRocket: FC = () => {
  const { rocketName, rocketFamily, rocketVariant, rocketDescr, rocketId } = useAppSelector(
    (state) => state.singleLaunch
  );

  return (
    <div className={s.rocket}>
      <Title className={s.rocket__title}>{rocketName}</Title>
      <div className={s.rocket__subtitle}>
        <h3>
          Family: <span>{rocketFamily}</span>
        </h3>
        <h3>
          Configuration: <span>{rocketVariant || 'No info'}</span>
        </h3>
      </div>

      <Description className={s.rocket__description}>{rocketDescr}</Description>

      <Button href={`/rocket/${[rocketId]}`}>See Rocket Details</Button>
    </div>
  );
};
