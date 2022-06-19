import { FC } from 'react';
import s from './Spinner.module.scss';

export const Spinner: FC = () => {
  return (
    <div className={s.spinner}>
      <div className={s['lds-default']}>
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
      <div className={s.spinner__title}>Load more</div>
    </div>
  );
};
