import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Layout/Layout.scss'
import { Outlet } from 'react-router-dom';
import Tab from './Tab';

const Layout = () => {
  return (
    <div className="Layout d-flex align-items-center">
      <Sidebar />
      <div className="content">
        <Tab />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
