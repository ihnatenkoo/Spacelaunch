import { FC } from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { LaunchesData } from '../../Interfaces';
import Tag from '../Tag/Tag';

import placeholder from '../../public/images/img-placeholder.jpg';
import styles from './Card.module.scss';
import cn from 'classnames';

interface CardProps {
  launch: LaunchesData;
  size: 's' | 'm';
}

const Card: FC<CardProps> = ({ launch, size }) => {
  const { id, image, date, name } = launch;
  const launchImg = image || placeholder;

  return (
    <Link href={`/launch/${[id]}`}>
      <div className={cn(styles.card, { [styles.small]: size === 's' })}>
        <div className={styles.card__header}>
          <Image
            src={launchImg}
            alt={name}
            width={size === 's' ? 380 : 580}
            height={size === 's' ? 264 : 324}
          />
          <Tag className={styles.card__tag} gradient>
            {moment.utc(date).format('MMM D, YYYY, h:mm a')}
          </Tag>
        </div>
        <h3 className={styles.card__title}>{name}</h3>
      </div>
    </Link>
  );
};

export default Card;
