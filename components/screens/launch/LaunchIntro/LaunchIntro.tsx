import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks';
import { IntroLayout } from '../../../../layout';
import { Title } from '../../../ui/Title/Title';
import s from './LaunchIntro.module.scss';

interface TimeState {
  total: number | string;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const LaunchIntro: FC = () => {
  const [time, setTime] = useState<TimeState>({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { date, image, name } = useAppSelector((state) => state.singleLaunch);

  const getTimeLeft = (date: string) => {
    const currentDate = Date.parse(new Date().toISOString());
    const startDate = Date.parse(date);
    const timeToStart = startDate - currentDate;

    if (timeToStart <= 0) {
      setTime({
        total: '00',
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      });
      return;
    }

    let days: string | number = Math.floor(timeToStart / (1000 * 60 * 60 * 24));
    let hours: string | number = Math.floor((timeToStart / (1000 * 60 * 60)) % 24);
    let minutes: string | number = Math.floor((timeToStart / (1000 * 60)) % 60);
    let seconds: string | number = Math.floor((timeToStart / 1000) % 60);

    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    setTime({
      total: timeToStart,
      days,
      hours,
      minutes,
      seconds
    });
  };

  useEffect(() => {
    getTimeLeft(date);
  }, [date]);

  useEffect(() => {
    const timer = setInterval(() => getTimeLeft(date), 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <IntroLayout image={image} className={s.launch}>
      <Title view="h1" className={s.launch__title}>
        {name}
      </Title>
      <Title view="h3" className={s.launch__subtitle}>
        Go for Launch
      </Title>
      <div className={s.launch__start}>
        <span>{time.days || ' '}</span>:<span>{time.hours || ' '}</span>:
        <span>{time.minutes || ' '}</span>:<span>{time.seconds || ' '}</span>
      </div>
    </IntroLayout>
  );
};
