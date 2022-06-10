import Link from 'next/link';
import React, { FC } from 'react';
import { IntroLayout } from '../../../../layout';
import { Button, Title, Description } from '../../../../components';

interface HomeIntroProps {
  image?: string | undefined;
}

export const HomeIntro: FC<HomeIntroProps> = ({ image }) => {
  return (
    <IntroLayout image={image} style={{ paddingRight: 0, paddingLeft: 0 }}>
      <Title view="main" mb={30} textAlign="left">
        Upcoming <br />
        Spaceflight Launches
      </Title>
      <Description mb={50} textAlign="left">
        View all launches available - including launches from the past and utilize
        <br />
        powerful search filters.
      </Description>
      <Button>
        <Link href={'#launches'}>
          <a>Show All Launches</a>
        </Link>
      </Button>
    </IntroLayout>
  );
};
