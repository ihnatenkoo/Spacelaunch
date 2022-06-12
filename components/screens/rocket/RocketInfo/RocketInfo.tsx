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

  const renderText = (text: string, unit: string | null = null): string => {
    if (!unit) return text ? text : '-';

    return text ? `${text} ${unit}` : '-';
  };

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
          <ul>
            <li>
              Name <span>{renderText(name)}</span>
            </li>
            <li>
              Family <span>{renderText(family)}</span>
            </li>
            <li>
              Varian <span>{renderText(variant)}</span>
            </li>
            <li>
              Full name
              <span>{renderText(fullName)}</span>
            </li>
            <li>
              Alias <span>{renderText(alias)}</span>
            </li>
          </ul>
        </div>

        <div className={styles.feature__item}>
          <SpecificationIcon />
          <h2 className={styles.feature__item__title}>Specifications</h2>
          <ul>
            <li>
              Minimum Stage
              <span>{renderText(min_stage)}</span>
            </li>
            <li>
              Max Stage
              <span>{renderText(max_stage)}</span>
            </li>
            <li>
              Length <span>{renderText(length, 'm')}</span>
            </li>
            <li>
              Diameter
              <span>{renderText(diameter, 'm')}</span>
            </li>
            <li>
              Fairing Diameter
              <span>{renderText(diameter, 'm')}</span>
            </li>
            <li>
              Launch Mass
              <span>{renderText(launch_mass, 'T')}</span>
            </li>
            <li>
              Thrust
              <span>{renderText(to_thrust, 'kN')}</span>
            </li>
            <li>
              Apogee (Sub-Orbital)
              <span>{renderText(apogee, 'km')}</span>
            </li>
          </ul>
        </div>

        <div className={styles.feature__item}>
          <PayloadIcon />
          <h2 className={styles.feature__item__title}>Payload Capacity</h2>
          <ul>
            <li>
              Capacity
              <span className={styles.feature__item__value}>{renderText(leo_capacity)}</span>
            </li>
            <li>
              Range
              <span className={styles.feature__item__value}>{renderText(vehicle_range)}</span>
            </li>
            <li>
              Total Launches
              <span className={styles.feature__item__value}>{renderText(total_launch_count)}</span>
            </li>
            <li>
              Successful Launches
              <span className={styles.feature__item__value}>{renderText(successful_launches)}</span>
            </li>
            <li>
              Failed Launches
              <span className={styles.feature__item__value}>{renderText(failed_launches)}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
