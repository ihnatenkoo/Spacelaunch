import React, { FC } from 'react';
import { LayoutProps } from './LayoutProps';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header primary />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
