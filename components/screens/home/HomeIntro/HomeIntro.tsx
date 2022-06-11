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
      <Title view="main" className={s.title}>
        Upcoming <br />
        Spaceflight Launches
      </Title>
      <Description className={s.description}>
        View all launches available - including launches from the past and utilize
        <br />
        powerful search filters.
      </Description>
      <Button href={'#launches'}>Show All Launches</Button>
    </IntroLayout>
  );
};
