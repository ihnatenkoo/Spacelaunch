import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import errorImage from './error.gif';
import styles from './Error.module.scss';

export const Error: FC = () => {
  const refreshPage = () => {
    window.location.reload();
  };

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

      <Link href="/#">
        <a onClick={refreshPage} className={styles.error__link}>
          Reload Page
        </a>
      </Link>
    </>
  );
};
