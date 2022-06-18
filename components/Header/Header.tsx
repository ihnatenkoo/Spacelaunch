import React, { FC } from 'react';
import styles from './Header.module.scss';
import Logo from '../../public/icons/main-logo.svg';
import ArrowLeft from '../../public/icons/arrow-left.svg';
import cn from 'classnames';
import Link from 'next/link';

interface HeaderProps {
  header: 'homepage' | 'secondary';
}

export const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div
          className={cn(styles.header__inner, {
            [styles.homepage]: header === 'homepage'
          })}
        >
          {header === 'secondary' ? (
            <Link href="/">
              <a>
                <div className={styles.header__link}>
                  <ArrowLeft className={styles.header__arrow} />
                  <span>Back to home</span>
                </div>
              </a>
            </Link>
          ) : (
            <></>
          )}

          <Logo className={styles.header__logo} />
        </div>
      </div>
    </header>
  );
};
