import { FC } from 'react';
import Image from 'next/image';
import errorImage from './error.gif';
import styles from './Error.module.scss';
import { useActions } from '../../../hooks';

export const Error: FC = () => {
  const { setLoadingTrigger } = useActions();

  return (
    <>
      <Image
        src={errorImage}
        width="225"
        height="225"
        alt="error picture"
        style={{ borderRadius: '30%' }}
      />

      <h2 className={styles.error__title}>Data loading error</h2>

      <a onClick={() => setLoadingTrigger(true)} className={styles.error__link}>
        Upload again
      </a>
    </>
  );
};
