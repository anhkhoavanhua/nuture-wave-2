import React, { createContext, useContext, useState } from 'react';

interface SidebarContextProps {
  isAccountOpen: boolean;
  setIsAccountOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isAccountOpen, setIsAccountOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
