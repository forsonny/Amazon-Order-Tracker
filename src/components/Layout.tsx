import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, currentTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSidebarCollapse = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar 
        isOpen={sidebarOpen} 
        isCollapsed={sidebarCollapsed}
        onClose={() => setSidebarOpen(false)}
        onToggleCollapse={toggleSidebarCollapse}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onMenuClick={toggleSidebar}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
