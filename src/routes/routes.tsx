/*import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';
import Article from '../components/Article';
import PdSession from '../components/PdSession';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Route đến trang Login */
        /*<Route path="/" element={<Login />} />

      {/* Route đến Layout */
        /*<Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/articles" element={<Article />} />
        <Route path="PdSession" element={<PdSession />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;*/


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Article from '../components/Article';
import PdSession from '../components/PdSession';
import Layout from '../components/Layout';

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/PdSession" element={<PdSession />} />
        </Route>
      </Routes>
    );
  };
  
  export default AppRoutes;





