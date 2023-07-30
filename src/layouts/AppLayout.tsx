import { useState, ReactNode } from 'react';
import clsx from 'clsx';

import Sidebar from '../components/Sidebar';

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
        flex justify-center items-center min-h-screen dark:bg-gradient-to-t dark:from-slate-800 dark:via-slate-700 dark:to-slate-600
        bg-gradient-to-t from-white-500 via-white-600 to-white-800
      "
    >
      <div
        className={clsx(
          'relative grid grid-cols-[320px_1fr] dark:bg-gray-950 dark:text-gray-50 bg-white-950 text-gray-500 transition-all duration-400 ease-in-out overflow-hidden',
          'dark:drop-shadow-[0_4px_5px_rgba(0,0,0,0.40)] drop-shadow-[0_4px_5px_rgba(0,0,0,0.10)]',
          {
            'w-screen h-screen': fullScreen,
            'w-[1500px] h-[952px] rounded-lg': !fullScreen,
          },
        )}
      >
        <nav className="dark:bg-gray-900 bg-white-900">
          <Sidebar />
        </nav>

        <header className="absolute right-0 p-4">
          <button
            className="p-1.5 rounded-md text-3xl dark:hover:bg-gray-800 hover:bg-white-800 focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-400 focus-visible:ring-white-300"
            onClick={() => setFullScreen(!fullScreen)}
          >
            {!fullScreen ? (
              <IconFullScreenOn width="21" height="21" />
            ) : (
              <IconFullScreenOff width="21" height="21" />
            )}
          </button>
        </header>

        <main className="flex justify-center min-h-full pt-40">
          <div className="w-[832px]">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
