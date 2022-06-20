import React, { FC } from 'react';
import Link from 'next/link';

import ArrowLeftIcon from '../../public/icons/arrow-left.svg';
import MainLogo from '../../public/icons/main-logo.svg';
import HomeIcon from '/public/icons/home-icon.svg';

import cn from 'classnames';
import s from './Header.module.scss';

interface HeaderProps {
  header: 'homepage' | 'secondary';
}

export const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <header className={s.header}>
      <div className="container">
        <div
          className={cn(s.header__inner, {
            [s.homepage]: header === 'homepage'
          })}
        >
          {header === 'secondary' ? (
            <Link href="/">
              <a>
                <div className={s.header__link}>
                  <HomeIcon className={s.header__home} />
                  <ArrowLeftIcon className={s.header__arrow} />
                  <span>Back to home</span>
                </div>
              </a>
            </Link>
          ) : (
            <></>
          )}

          <MainLogo className={s.header__logo} />
        </div>
      </div>
    </header>
  );
};
