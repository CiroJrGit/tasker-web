import { NavLink } from 'react-router-dom';

import * as Popover from '@radix-ui/react-popover';
import User from './User';

import IconSearch from '../assets/icons/IconSearch';
import IconSettings from '../assets/icons/IconSettings';
import IconTrash from '../assets/icons/IconTrash';
import IconCaret from '../assets/icons/IconCaret';
// import Trash from './Trash';

const Menu = () => {
  return (
    <nav className="flex flex-col gap-2.5">
      <Popover.Root>
        <Popover.Trigger
          className="
            flex justify-between items-center px-2.5 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/70 dark:active:bg-gray-800/80 active:bg-white-600/75
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
          "
        >
          <User variant="sm" />
          <div className="flex items-center">
            <IconCaret
              width="11"
              height="11"
              color="dark:stroke-gray-400 stroke-white-300"
            />
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <div className="relative left-4 min-w-[306px] mt-1.5 px-1 py-2 rounded-md dark:bg-gray-800 bg-white-800 drop-shadow-md">
              <User variant="md" />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <div className="flex flex-col gap-1">
        <NavLink
          to="/"
          className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300"
        >
          <div className="flex flex-row items-center gap-2 h-9 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/70 dark:active:bg-gray-800/80 active:bg-white-600/75">
            <div className="flex justify-center items-center w-6">
              <IconSearch width="16" height="16" />
            </div>
            <span className="flex items-center font-int font-medium text-sm dark:text-gray-100 text-gray-300">
              Pesquisar
            </span>
          </div>
        </NavLink>

        <NavLink
          to="/"
          className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300"
        >
          <div className="flex flex-row items-center gap-2 h-9 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/70 dark:active:bg-gray-800/80 active:bg-white-600/75">
            <div className="flex justify-center items-center w-6">
              <IconSettings width="18" height="18" />
            </div>
            <span className="flex items-center font-int font-medium text-sm dark:text-gray-100 text-gray-300">
              Configurações
            </span>
          </div>
        </NavLink>

        <Popover.Root>
          <Popover.Trigger
            className="
              flex flex-row items-center gap-2 h-9 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/70 dark:active:bg-gray-800/80 active:bg-white-600/75
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
          >
            <div className="flex justify-center items-center w-6">
              <IconTrash width="16" height="16" />
            </div>
            <span className="flex items-center font-int font-medium text-sm dark:text-gray-100 text-gray-300">
              Lixeira
            </span>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="focus:outline-none">
              <div className="relative left-4 min-w-[306px] mt-1.5 px-1 py-2 rounded-md dark:bg-gray-800 bg-white-700 drop-shadow-md">
                {/* <Trash /> */}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </nav>
  );
};

export default Menu;
