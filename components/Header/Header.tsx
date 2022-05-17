import React, { FC } from 'react';
import styles from './Header.module.scss';
import Logo from '../../public/images/main-logo.svg';
import ArrowLeft from '../../public/images/arrow-left.svg';
import cn from 'classnames';

interface IAppearance {
  primary?: boolean;
}

const Header: FC<IAppearance> = ({ primary }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div
          className={cn(styles.header__inner, {
            [styles.primary]: primary
          })}
        >
          <a
            href="#"
            className={cn(styles.header__link, {
              [styles.primary]: primary
            })}
          >
            <ArrowLeft className={styles.header__arrow} />
            Back to home
          </a>
          <Logo className={styles.header__logo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
