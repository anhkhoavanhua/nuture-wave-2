/*import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;*/

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import { SidebarProvider } from './contexts/SidebarContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </BrowserRouter>
  );
};

export default App;



