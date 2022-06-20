import React, { FC } from 'react';
import { IntroLayout } from '../../../../layout';
import { Button, Title, Description } from '../../../../components';
import s from './HomeIntro.module.scss';
interface HomeIntroProps {
  image?: string | undefined;
}

export const HomeIntro: FC<HomeIntroProps> = ({ image }) => {
  return (
    <IntroLayout image={image} textAlignLeft>
      <Title view="h1" className={s.title}>
        Upcoming <br />
        Spaceflight Launches
      </Title>
      <Description className={s.description}>
        View all launches available - including launches from the past and utilize powerful search
        filters.
      </Description>
      <Button href={'#launches'}>Show All Launches</Button>
    </IntroLayout>
  );
};
