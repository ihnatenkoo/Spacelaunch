import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import s from './Title.module.scss';
import cn from 'classnames';

interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  view: TitleView;
}

type TitleView = 'h1' | 'h2' | 'h3';

export const Title: FC<TitleProps> = ({ children, className, view }) => {
  switch (view) {
    case 'h1':
      return <h1 className={cn(s.title, className)}>{children}</h1>;

    case 'h2':
      return <h2 className={cn(s.title, s.h2, className)}>{children}</h2>;

    case 'h3':
      return <h3 className={cn(s.title, s.h3, className)}>{children}</h3>;

    default:
      return <></>;
  }
};
