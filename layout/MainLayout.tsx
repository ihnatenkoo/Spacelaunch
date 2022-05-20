import React, { FC, ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export interface MainLayoutProps {
  children: ReactNode;
  header: 'homepage' | 'secondary';
}

const MainLayout: FC<MainLayoutProps> = ({ children, header }) => {
  return (
    <>
      <Header header={header} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
