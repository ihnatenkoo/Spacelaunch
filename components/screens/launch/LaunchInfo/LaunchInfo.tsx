import React, { FC } from 'react';
import { Tag, Title } from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import { Description } from '../../../ui/Description/Description';
import s from './LaunchInfo.module.scss';

export const LaunchInfo: FC = () => {
  const { orbit, type, launchComplex, rocketName, location, missionDescr } = useAppSelector(
    (state) => state.singleLaunch
  );

  return (
    <div className={s.launch}>
      <Title className={s.launch__title}>Overview</Title>
      <h3 className={s.launch__subtitle}>
        Destination: <span>{orbit}</span>
      </h3>
      <h3 className={s.launch__subtitle}>
        Mission: <span>{type}</span>
      </h3>
      <div className={s.launch__info}>
        <Tag gradient className={s.tag}>
          {launchComplex}
        </Tag>
        <Tag gradient className={s.tag}>
          {orbit}
        </Tag>
        <Tag gradient className={s.tag}>
          {rocketName}
        </Tag>
      </div>
      <Tag className={s.launch__location}>{location}</Tag>
      <Description>{missionDescr}</Description>
    </div>
  );
};
