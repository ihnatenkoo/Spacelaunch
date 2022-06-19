import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LaunchesData } from '../../Interfaces';
import { Tag, Title } from '../../components';
import { useAppSelector } from '../../hooks';
import { useRouter } from 'next/router';

import placeholder from '../../public/images/img-placeholder.jpg';
import s from './Card.module.scss';
import cn from 'classnames';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
interface CardProps {
  data: LaunchesData;
  size: CardSize;
  path: string;
}

type CardSize = 's' | 'm';

export const Card: FC<CardProps> = ({ data, size, path }) => {
  const [isCurrent, setIsCurrent] = useState<boolean>(false);
  const pageId = useAppSelector((state) => state.singleEvent.id);
  const { id, image, date, name } = data;
  const { pathname } = useRouter();

  const cardImg = image || placeholder;

  useEffect(() => {
    if (pathname !== '/event/[id]') {
      setIsCurrent(false);
      return;
    }
    if (id === pageId) {
      setIsCurrent(true);
      return;
    }
    setIsCurrent(false);
  }, [pathname, id, pageId]);

  return (
    <Link href={`/${path}/${[id]}`}>
      <a className={cn({ [s.disabled]: isCurrent })}>
        <div className={cn(s.card, { [s.small]: size === 's', [s.current]: isCurrent })}>
          <div className={s.card__header}>
            <div className={s.card__header_image}>
              <Image
                src={cardImg}
                alt={name}
                layout="fill"
                objectFit="cover"
                objectPosition="center 25%"
                draggable="false"
              />
            </div>
            <Tag className={s.card__tag} gradient>
              {dayjs.utc(date).format('MMM DD, YYYY, h:mm a')}
            </Tag>
          </div>
          <Title view="h3" className={s.card__title}>
            {name}
          </Title>
        </div>
      </a>
    </Link>
  );
};
