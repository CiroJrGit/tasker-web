import { useState, ReactNode } from 'react';

import Sidebar from '../components/Sidebar';

import IconFullScreenOn from '../assets/icons/IconFullScreenOn';
import IconFullScreenOff from '../assets/icons/IconFullScreenOff';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-gradient-to-t from-slate-700 via-slate-600 to-slate-500 bg-white-300">
      <div className="relative grid grid-cols-[320px_1fr] w-[1500px] h-[952px] rounded-lg dark:bg-gray-950 dark:text-gray-50 bg-white-950 text-gray-500 overflow-hidden">
        <aside className="dark:bg-gray-900 bg-white-900">
          <Sidebar />
        </aside>

        <main className="min-h-full">{children}</main>

        <div className="absolute right-0 p-4">
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
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
