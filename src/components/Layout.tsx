/*import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  return (
    <div className="layout1"> 
      <Sidebar />
      <div className="layout2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout; */


import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* Sử dụng children mặc định */}
      </div>
    </div>
  );
};

export default Layout;





