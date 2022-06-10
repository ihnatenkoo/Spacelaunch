import { FC, ReactNode } from 'react';
import styles from './Description.module.scss';
import cn from 'classnames';

interface DescriptionProps {
  children: ReactNode;
  mb?: number;
  textAlign?: TextAlign;
}

type TextAlign = 'center' | 'left';

export const Description: FC<DescriptionProps> = ({ children, mb, textAlign = 'center' }) => {
  return (
    <div
      className={cn(styles.description, { [styles.left]: textAlign === 'left' })}
      style={{ marginBottom: `${mb}px` }}
    >
      {children}
    </div>
  );
};
