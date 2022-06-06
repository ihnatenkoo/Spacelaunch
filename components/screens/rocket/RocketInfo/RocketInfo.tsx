import { Tag } from '../../../../components';
import styles from './RocketInfo.module.scss';
import RocketIcon from '/public/icons/rocket-icon.svg';
import SpecificationIcon from '/public/icons/spec-icon.svg';
import PayloadIcon from '/public/icons/payload-icon.svg';
import { FC } from 'react';
import { useAppSelector } from '../../../../hooks';

export const RocketInfo: FC = () => {
  const {
    name,
    fullName,
    family,
    type,
    country_code,
    variant,
    alias,
    min_stage,
    max_stage,
    length,
    diameter,
    launch_mass,
    to_thrust,
    apogee,
    leo_capacity,
    vehicle_range,
    total_launch_count,
    successful_launches,
    failed_launches
  } = useAppSelector((state) => state.singleRocket);

  return (
    <section className={styles.info}>
      <div className={styles.info__tags}>
        <Tag gradient className={styles.info__tag}>
          {family}
        </Tag>
        <Tag gradient className={styles.info__tag}>
          {type}
        </Tag>
        <Tag>{country_code}</Tag>
      </div>

      <div className={styles.feature}>
        <div className={styles.feature__item}>
          <RocketIcon />
          <h2 className={styles.feature__item__title}>Family</h2>
          <h3 className={styles.feature__item__spec}>
            Name <span className={styles.feature__item__value}>{name || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Family <span className={styles.feature__item__value}>{family || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Varian <span className={styles.feature__item__value}>{variant || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Full name
            <span className={styles.feature__item__value}>{fullName || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Alias <span className={styles.feature__item__value}>{alias || '-'}</span>
          </h3>
        </div>

        <div className={styles.feature__item}>
          <SpecificationIcon />
          <h2 className={styles.feature__item__title}>Specifications</h2>
          <h3 className={styles.feature__item__spec}>
            Minimum Stage
            <span className={styles.feature__item__value}>{min_stage || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Max Stage
            <span className={styles.feature__item__value}>{max_stage || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Length <span className={styles.feature__item__value}>{length || '-'} m</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Diameter
            <span className={styles.feature__item__value}>{diameter || '-'} m</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Fairing Diameter
            <span className={styles.feature__item__value}>{diameter || '-'} m</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Launch Mass <span className={styles.feature__item__value}>{launch_mass || '-'} T</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Thrust <span className={styles.feature__item__value}>{to_thrust || '-'} kN</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Apogee (Sub-Orbital)
            <span className={styles.feature__item__value}>{apogee || '-'} km</span>
          </h3>
        </div>

        <div className={styles.feature__item}>
          <PayloadIcon />
          <h2 className={styles.feature__item__title}>Payload Capacity</h2>
          <h3 className={styles.feature__item__spec}>
            Capacity <span className={styles.feature__item__value}>{leo_capacity || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Range
            <span className={styles.feature__item__value}>{vehicle_range || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Total Launches
            <span className={styles.feature__item__value}>{total_launch_count || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Successful Launches
            <span className={styles.feature__item__value}>{successful_launches || '-'}</span>
          </h3>
          <h3 className={styles.feature__item__spec}>
            Failed Launches
            <span className={styles.feature__item__value}>{failed_launches || '-'}</span>
          </h3>
        </div>
      </div>
    </section>
  );
};
