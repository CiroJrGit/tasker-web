import * as Dialog from '@radix-ui/react-dialog'

import NavList from './NavList'
import Menu from './Menu'
import ModalNewPage from './ModalNewPage'
import ModalWrap from './ModalWrap'

import IconPlusRounded from '../assets/icons/IconPlusRounded'

const Sidebar = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-11 w-full min-h-full px-3 py-6">
      <Menu />

      <NavList />

      <Dialog.Root>
        <Dialog.Trigger className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300">
          <div className="flex flex-row items-center gap-2 h-8 px-2 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-800/80 active:bg-white-600/75">
            <div className="flex justify-center items-center w-6">
              <IconPlusRounded width="18" height="18" />
            </div>
            <span className="flex items-center font-int font-medium text-sm dark:text-gray-100 text-gray-300">
              Nova página
            </span>
          </div>
        </Dialog.Trigger>

        <ModalWrap title="Nova página">
          <ModalNewPage />
        </ModalWrap>
      </Dialog.Root>
    </div>
  )
}

export default Sidebar
