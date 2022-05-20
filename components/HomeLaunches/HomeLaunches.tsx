import { FC } from 'react';
import { LaunchesData, HomeProps } from '../../Interfaces';
import Card from '../Card/Card';
import styles from './HomeLaunches.module.scss';

const HomeLaunches: FC<HomeProps> = ({ launchesData }) => {
  return (
    <section>
      <h2 id="launches" className={styles.title}>
        Spaceflight Launches
      </h2>
      <div className={styles.inner}>
        {launchesData.map((launch: LaunchesData) => {
          return <Card size="m" key={launch.id} launch={launch}></Card>;
        })}
      </div>
    </section>
  );
};

export default HomeLaunches;
