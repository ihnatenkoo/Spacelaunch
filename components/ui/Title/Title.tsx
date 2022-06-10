import { FC, ReactNode } from 'react';
import s from './Title.module.scss';
import cn from 'classnames';

interface TitleProps {
  children: ReactNode;
  className?: string;
  mb?: number;
  textAlign?: TextAlign;
  view?: TitleView;
}

type TitleView = 'main' | 'secondary';
type TextAlign = 'center' | 'left';

export const Title: FC<TitleProps> = ({
  children,
  mb,
  className,
  view = 'secondary',
  textAlign = 'center'
}) => {
  switch (view) {
    case 'main':
      return (
        <h1
          className={cn(s.title, className)}
          style={{ marginBottom: `${mb}px`, textAlign: textAlign }}
        >
          {children}
        </h1>
      );

    case 'secondary':
      return (
        <h2
          className={cn(s.title, s.secondary, className)}
          style={{ marginBottom: `${mb}px`, textAlign: textAlign }}
        >
          {children}
        </h2>
      );
  }
};
