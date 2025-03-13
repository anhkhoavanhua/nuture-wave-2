import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  return (
    <div className="layout1"> {/* Thêm lớp phân biệt */}
      <Sidebar />
      <div className="layout2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

