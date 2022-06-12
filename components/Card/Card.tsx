import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LaunchesData } from '../../Interfaces';
import { Tag, Title } from '../../components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import placeholder from '../../public/images/img-placeholder.jpg';
import styles from './Card.module.scss';
import cn from 'classnames';

interface CardProps {
  data: LaunchesData;
  size: CardSize;
  path: string;
}

type CardSize = 's' | 'm';

export const Card: FC<CardProps> = ({ data, size, path }) => {
  const { id, image, date, name } = data;
  const cardImg = image || placeholder;

  return (
    <Link href={`/${path}/${[id]}`}>
      <a>
        <div className={cn(styles.card, { [styles.small]: size === 's' })}>
          <div className={styles.card__header}>
            <Image
              src={cardImg}
              alt={name}
              width={size === 's' ? 380 : 580}
              height={size === 's' ? 264 : 324}
              draggable="false"
            />
            <Tag className={styles.card__tag} gradient>
              {dayjs.utc(date).format('MMM DD, YYYY, h:mm a')}
            </Tag>
          </div>
          <Title view="h3" className={styles.card__title}>
            {name}
          </Title>
        </div>
      </a>
    </Link>
  );
};
