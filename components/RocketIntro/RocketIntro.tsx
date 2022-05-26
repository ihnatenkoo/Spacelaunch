import React, { FC } from 'react';
import dayjs from 'dayjs';
import { IntroLayout } from '../../layout';
import styles from './RocketIntro.module.scss';

interface RocketIntroProps {
  name: string;
  image: string;
  description: string;
  firstFlight: string;
  nameCompany: string;
  abbrevCompany: string;
}

const RocketIntro: FC<RocketIntroProps> = ({
  name,
  image,
  description,
  firstFlight,
  nameCompany,
  abbrevCompany
}) => {
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

export default RocketIntro;
