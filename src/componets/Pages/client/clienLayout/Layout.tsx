import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header /> {/* Hiển thị Header */}
      <main>{children}</main>
      <Footer /> {/* Hiển thị Footer */}
    </div>
  );
};

export default Layout;