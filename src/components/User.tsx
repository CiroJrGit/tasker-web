import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

import * as Separator from '@radix-ui/react-separator';
import IconLogout from '../assets/icons/IconLogout';
import IconCheck from '../assets/icons/IconCheck';

interface UserProps {
  variant: string;
}

const User = ({ variant }: UserProps) => {
  const { handleSignOut, user } = useContext(AuthContext);

  return (
    <>
      {variant === 'sm' && (
        <div className="flex items-center gap-2">
          <div className="px-2 rounded-md text-xl font-medium dark:text-gray-100 text-gray-300 dark:bg-gray-500 bg-white-600">
            <span className="duration-40">{user.name?.charAt(0)}</span>
          </div>

          <div className="flex flex-col">
            <span className="block max-w-[175px] pt-0.5 text-base font-semibold dark:text-gray-50 text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
              {user.name}
            </span>
          </div>
        </div>
      )}

      {variant === 'md' && (
        <div className="flex flex-col gap-3">
          <button className="focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group">
            <div className="flex justify-between items-center mx-1 px-2 py-2 rounded-md dark:hover:bg-gray-600 hover:bg-white-600/70 dark:active:bg-gray-500/30 active:bg-white-600">
              <div className="flex gap-3">
                <div
                  className="
                    flex items-center px-2.5 rounded-lg text-3xl font-medium dark:text-gray-100 text-gray-300 border dark:border-gray-500 border-white-500/40 dark:bg-gray-500 bg-white-600
                    dark:group-hover:bg-gray-500 dark:group-hover:border-gray-500 group-hover:bg-white-500 group-hover:border-white-400/10
                  "
                >
                  <span className="duration-40">{user.name?.charAt(0)}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-base font-semibold dark:text-gray-50 text-gray-400 text-start whitespace-nowrap overflow-hidden text-ellipsistext-start">
                    {user.name}
                  </span>

                  <span className="font-medium text-sm dark:text-gray-300 text-white-300 text-start">
                    {user.email}
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center px-2">
                <IconCheck
                  width="21"
                  height="21"
                  color="dark:stroke-gray-300 stroke-white-300"
                  stroke="1.4"
                />
              </div>
            </div>
          </button>

          <Separator.Root
            className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />

          <button
            className="focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300"
            onClick={() => handleSignOut()}
          >
            <div className="flex flex-row gap-2 h-9 mx-1 px-3 rounded-md dark:hover:bg-gray-600 hover:bg-white-600/70 dark:active:bg-gray-500/30 active:bg-white-600">
              <div className="flex justify-center items-center w-6">
                <IconLogout width="20" height="20" />
              </div>
              <span className="flex items-center font-int font-medium text-sm dark:text-gray-100 text-gray-300">
                Sair
              </span>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default User;
