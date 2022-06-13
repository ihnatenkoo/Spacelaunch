import Image from 'next/image';
import { FC } from 'react';
import { Title } from '../../../ui/Title/Title';
import { useAppSelector } from '../../../../hooks';
import { Tag } from '../../../ui/Tag/Tag';
import { Description } from '../../../ui/Description/Description';
import placeholder from '../../../../public/images/img-placeholder.jpg';
import s from './EventInformation.module.scss';

import dayjs from 'dayjs';

export const EventInformation: FC = () => {
  const eventImg = useAppSelector((state) => state.singleEvent.eventImg);
  const rocketName = useAppSelector((state) => state.singleEvent.rocketName);
  const date = useAppSelector((state) => state.singleEvent.date);
  const orbit = useAppSelector((state) => state.singleEvent.orbit);
  const mission_type = useAppSelector((state) => state.singleEvent.mission_type);
  const mainDescr = useAppSelector((state) => state.singleEvent.mainDescr);

  const img = eventImg || placeholder;
  const description: string = mainDescr.length > 260 ? mainDescr.slice(0, 260) + '...' : mainDescr;

  return (
    <section className={s.event}>
      <Title view="h2" className={s.event__title}>
        Related Information
      </Title>
      <div className={s.event__inner}>
        <Image src={img} width={580} height={324} alt={rocketName} />
        <div className={s.event__info}>
          <Title view="h3">{rocketName}</Title>
          <Tag className={s.event__tag}>{dayjs.utc(date).format('MMM DD, YYYY, h:mm a')}</Tag>
          <h4 className={s.event__subtitle}>
            Destination: <span>{orbit || 'No info'}</span>
          </h4>
          <h4 className={s.event__subtitle}>
            Mission: <span>{mission_type || 'No info'}</span>
          </h4>
          <Description className={s.event__descr}>
            {description || 'Description not Available'}
          </Description>
        </div>
      </div>
    </section>
  );
};
