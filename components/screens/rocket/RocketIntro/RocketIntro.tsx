import React, { FC } from 'react';
import dayjs from 'dayjs';
import { IntroLayout } from '../../../../layout/IntroLayout';
import styles from './RocketIntro.module.scss';
import { useAppSelector } from '../../../../hooks';
import { Title } from '../../../ui/Title/Title';
import { Description } from '../../../ui/Description/Description';

export const RocketIntro: FC = () => {
  const { name, image, description, firstFlight, nameCompany, abbrevCompany } = useAppSelector(
    (state) => state.singleRocket
  );
  return (
    <IntroLayout image={image} className={styles.rocket}>
      <Title mb={10}>{name}</Title>
      <h3 className={styles.rocket__subtitle}>{`${nameCompany} (${abbrevCompany})`}</h3>
      <div className={styles.rocket__age}>
        {firstFlight ? dayjs(firstFlight).format('MMMM DD, YYYY') : <></>}
      </div>
      <Description>{description}</Description>
    </IntroLayout>
  );
};
