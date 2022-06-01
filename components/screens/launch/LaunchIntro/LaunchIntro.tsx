import React, { FC, useEffect, useState } from 'react';
import { IntroLayout } from '../../../../layout';
import styles from './LaunchIntro.module.scss';

interface LaunchIntroProps {
  name: string;
  image: string;
  date: string;
}
interface timeState {
  total: number | string;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const LaunchIntro: FC<LaunchIntroProps> = ({ name, image, date }) => {
  const [time, setTime] = useState<timeState>({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
  }, []);

  return (
    <IntroLayout image={image} className={styles.launch}>
      <h1 className={styles.launch__title}>{name}</h1>
      <h2 className={styles.launch__subtitle}>Go for Launch</h2>
      <div className={styles.launch__start}>
        <span>{time.days}</span>:<span>{time.hours}</span>:<span>{time.minutes}</span>:
        <span>{time.seconds}</span>
      </div>
    </IntroLayout>
  );
};
