import React, { FC } from 'react';
import dayjs from 'dayjs';
import { IntroLayout } from '../../../../layout/IntroLayout';
import styles from './RocketIntro.module.scss';
import { useAppSelector } from '../../../../hooks';

export const RocketIntro: FC = () => {
  const { name, image, description, firstFlight, nameCompany, abbrevCompany } = useAppSelector(
    (state) => state.singleRocket
  );
  return (
    <IntroLayout image={image} className={styles.rocket}>
      <h1 className={styles.rocket__title}>{name}</h1>
      <h2 className={styles.rocket__subtitle}>{`${nameCompany} (${abbrevCompany})`}</h2>
      <div className={styles.rocket__age}>
        {firstFlight ? dayjs(firstFlight).format('MMMM DD, YYYY') : <></>}
      </div>
      <div className={styles.rocket__description}>{description}</div>
    </IntroLayout>
  );
};
