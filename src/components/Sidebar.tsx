import * as Dialog from '@radix-ui/react-dialog';

import NavList from './NavList';
import Menu from './Menu';
import ModalNewPage from './ModalNewPage';
import ModalWrap from './ModalWrap';

import { HiOutlinePlus } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-11 w-[320px] min-h-full px-3 pt-7 p-4">
      <Menu />

      <NavList />

      <Dialog.Root>
        <Dialog.Trigger
          className="
            flex flex-row items-center gap-2 h-[52px] px-4 rounded-md dark:text-gray-100 text-gray-300
            dark:hover:bg-gray-700/80 hover:bg-white-700/75 dark:active:bg-gray-800/80 active:bg-white-600/75
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
          "
          type="button"
        >
          <div className="flex justify-center items-center w-6">
            <HiOutlinePlus className="text-2xl" />
          </div>
          <span className="font-medium">Nova página</span>
        </Dialog.Trigger>

        <ModalWrap title="Nova página">
          <ModalNewPage />
        </ModalWrap>
      </Dialog.Root>
    </div>
  );
};

export default Sidebar;
