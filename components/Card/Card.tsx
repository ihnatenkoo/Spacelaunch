import { FC } from 'react';
import moment from 'moment';
import Image from 'next/image';
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
  const { image, date, name } = launch;
  const launchImg = image || placeholder;

  return (
    <a href="#" className={cn(styles.card, { [styles.small]: size === 's' })}>
      <div className={styles.card__header}>
        <Image
          src={launchImg}
          alt={name}
          width={size === 's' ? 380 : 580}
          height={size === 's' ? 264 : 324}
        />
        <Tag className={styles.card__tag} gradient>
          {moment(date).format('MMM D, YYYY, h:mm a')}
        </Tag>
      </div>

      <h3 className={styles.card__title}>{name}</h3>
    </a>
  );
};

export default Card;
