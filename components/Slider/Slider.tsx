import { FC, useEffect, useState } from 'react';
import ArrowLeft from '../../public/icons/arrow-left.svg';
import ArrowRight from '../../public/icons/arrow-right.svg';
import { LaunchesData } from '../../Interfaces';
import { Title, Card } from '../../components';
import s from './Slider.module.scss';

interface SliderProps {
  data: Array<LaunchesData>;
  path: string;
}

export const Slider: FC<SliderProps> = ({ data, path }) => {
  const [position, setPosition] = useState<number>(0);

  const maxViewWidth = -data.length * 400 + 1200;

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
    <div className={s.slider}>
      <div className={s.slider__header}>
        <Title className={s.slider__header__title}>Recent Events</Title>
        <div className={s.slider__header__navigation}>
          <ArrowLeft onClick={() => prev(position)} className={s.arrow} />
          <ArrowRight onClick={() => next(position)} className={s.arrow} />
        </div>
      </div>

      <div className={s.slider__inner}>
        <div className={s.slider__inner__view} style={{ transform: `translateX(${position}px)` }}>
          {data.map((item) => {
            return <Card data={item} size="s" key={item.id} path={path} />;
          })}
        </div>
      </div>
    </div>
  );
};
