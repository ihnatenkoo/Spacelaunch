import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { Card } from '../../Card/Card';
import ArrowLeft from '../../../public/icons/arrow-left.svg';
import ArrowRight from '../../../public/icons/arrow-right.svg';

import styles from './Slider.module.scss';

const Slider: FC = () => {
  const { recentEventsData } = useAppSelector((state) => state.recentEvents);
  const [position, setPosition] = useState<number>(0);

  const maxViewWidth = -recentEventsData.length * 400 + 1200;

  const next = (position: number) => {
    position - 400 < maxViewWidth ? setPosition(0) : setPosition((state) => state - 400);
  };

  const prev = (position: number) => {
    position + 400 > 0 ? setPosition(maxViewWidth) : setPosition((state) => state + 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next(position);
    }, 3000);
    return () => clearInterval(interval);
  }, [position, maxViewWidth]);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__header}>
        <h2 className={styles.slider__header__title}>Recent Events</h2>
        <div className={styles.slider__header__navigation}>
          <ArrowLeft onClick={() => prev(position)} className={styles.arrow} />
          <ArrowRight onClick={() => next(position)} className={styles.arrow} />
        </div>
      </div>

      <div className={styles.slider__inner}>
        <div
          className={styles.slider__inner__view}
          style={{ transform: `translateX(${position}px)` }}
        >
          {recentEventsData.map((event) => {
            return <Card data={event} size="s" key={event.id} path={'event'} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
