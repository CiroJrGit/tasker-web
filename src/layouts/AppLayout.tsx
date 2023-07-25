import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-gradient-to-t from-slate-700 via-slate-600 to-slate-500 bg-white-900">
      <div className="grid grid-cols-[320px_1fr] w-[1500px] h-[952px] dark:bg-gray-950 dark:text-gray-50 bg-white-900 text-gray-500 overflow-hidden">
        <aside className="dark:bg-gray-900 bg-white-900">
          <Sidebar />
        </aside>

        <main className="w- h-full">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
