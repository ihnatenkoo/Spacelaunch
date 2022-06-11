import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import s from './Title.module.scss';
import cn from 'classnames';

interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  view?: TitleView;
}

type TitleView = 'main' | 'secondary';

export const Title: FC<TitleProps> = ({ children, className, view = 'secondary' }) => {
  switch (view) {
    case 'main':
      return <h1 className={cn(s.title, className)}>{children}</h1>;

    case 'secondary':
      return <h2 className={cn(s.title, s.secondary, className)}>{children}</h2>;
  }
};
