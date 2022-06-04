import { FC } from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  return (
    <>
      <div className={styles['lds-default']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.spinner__title}>Load more</div>
    </>
  );
};
