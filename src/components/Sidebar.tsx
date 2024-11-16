import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isCollapsed, onClose, onToggleCollapse }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" onClick={onClose}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        } ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        <div className={`flex items-center justify-between ${isCollapsed ? 'px-2' : 'px-6'} py-4`}>
          {!isCollapsed && (
            <div className="text-2xl font-semibold text-white">Amazon Order Tracker</div>
          )}
          <button onClick={onToggleCollapse} className="p-1 text-white focus:outline-none lg:block hidden">
            {isCollapsed ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            )}
          </button>
        </div>

        <nav className="mt-10">
          <a
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-6'} py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25`}
            href="#"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
            {!isCollapsed && <span className="mx-3">Dashboard</span>}
          </a>

          <a
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-6'} py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100`}
            href="#"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
            </svg>
            {!isCollapsed && <span className="mx-3">Orders</span>}
          </a>

          <a
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-6'} py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100`}
            href="#"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            {!isCollapsed && <span className="mx-3">Customers</span>}
          </a>

          <a
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-6'} py-2 mt-4 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100`}
            href="#"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            {!isCollapsed && <span className="mx-3">Reports</span>}
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
