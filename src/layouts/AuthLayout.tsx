import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="w-screen h-screen flex justify-center dark:bg-gray-950 dark:text-gray-50 bg-white-900 text-gray-500">
      {children}
    </div>
  );
};

export default AuthLayout;
