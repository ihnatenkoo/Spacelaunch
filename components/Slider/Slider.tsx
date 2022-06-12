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

  const calculateMaxViewWidth = (length: number): number => length * 400 + 1200;

  const next = (position: number) => {
    position - 400 < calculateMaxViewWidth(-data.length)
      ? setPosition(0)
      : setPosition((prevState) => prevState - 400);
  };

  const prev = (position: number) => {
    position + 400 > 0
      ? setPosition(calculateMaxViewWidth(-data.length))
      : setPosition((prevState) => prevState + 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next(position);
    }, 3000);
    return () => clearInterval(interval);
  }, [position, calculateMaxViewWidth(-data.length)]);

  return (
    <div className={s.slider}>
      <div className={s.slider__header}>
        <Title className={s.slider__header__title}>Recent Events</Title>
        <div className={s.slider__header__navigation}>
          <button>
            <ArrowLeft onClick={() => prev(position)} className={s.arrow} />
          </button>
          <button>
            <ArrowRight onClick={() => next(position)} className={s.arrow} />
          </button>
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
