import { useState, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Sidebar from '../components/Sidebar';

import IconBack from '../assets/icons/IconBack';
import IconFullScreenOn from '../assets/icons/IconFullScreenOn';
import IconFullScreenOff from '../assets/icons/IconFullScreenOff';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div
      className="
        flex justify-center items-center min-h-screen
        dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-[#373f55] dark:via-[#16181f] dark:to-[#282d41]
        bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-300 to-slate-500
      "
    >
      {/* dark:from-[#373f55] dark:via-[#16181f] dark:to-[#1d202e] */}
      {/* dark:from-navy-500 dark:via-navy-700 dark:to-navy-900 */}
      <div
        className={clsx(
          'relative grid grid-cols-[320px_1fr] dark:bg-gray-950 dark:text-gray-50 bg-white-950 text-gray-500 transition-all duration-400 ease-in-out overflow-hidden',
          'dark:drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.20)]',
          {
            'w-screen h-screen': fullScreen,
            'w-[1500px] h-[952px] rounded-lg': !fullScreen,
          },
        )}
      >
        <nav className="dark:bg-gray-900 bg-white-900 border-r dark:border-gray-700 border-white-800">
          <Sidebar />
        </nav>

        <header className="absolute right-0 p-4">
          <div className="flex items-center gap-2">
            <NavLink
              to="/welcome"
              className="
                flex p-2 rounded-md font-int font-medium dark:text-gray-200 text-white-300
                dark:hover:bg-gray-700 hover:bg-white-700/70 dark:active:bg-gray-800/80 active:bg-white-600/75
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
            >
              <IconBack width="18" height="18" />
            </NavLink>

            <button
              className="p-1.5 rounded-md text-3xl dark:hover:bg-gray-800 hover:bg-white-800 focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-400 focus-visible:ring-white-300"
              onClick={() => setFullScreen(!fullScreen)}
            >
              {!fullScreen ? (
                <IconFullScreenOn width="18" height="18" />
              ) : (
                <IconFullScreenOff width="18" height="18" />
              )}
            </button>
          </div>
        </header>

        <main className="flex justify-center min-h-full pt-40">
          <div className="w-[832px]">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
