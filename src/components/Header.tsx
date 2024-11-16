import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, toggleTheme, currentTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onMenuClick} className="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="relative ml-4 lg:ml-0">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>

              <input 
                className="form-input w-full sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600" 
                type="text" 
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center">
            <button 
              onClick={toggleTheme} 
              className="flex mx-4 text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle color scheme"
            >
              {currentTheme === 'dark' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="relative">
              <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                <img 
                  className="h-full w-full object-cover" 
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" 
                  alt="Your avatar"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
