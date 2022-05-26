import React, { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
