import * as Popover from '@radix-ui/react-popover'
import * as Dialog from '@radix-ui/react-dialog'
import User from '../User'
import SearchModal from '../Modal/SearchModal'
import SettingsModal from '../Modal/SettingsModal'

import IconSearch from '@/assets/icons/IconSearch'
import IconSettings from '@/assets/icons/IconSettings'
import IconTrash from '@/assets/icons/IconTrash'
import IconCaret from '@/assets/icons/IconCaret'
import Trash from '../Trash'

const Menu = () => {
  return (
    <nav className="flex flex-col gap-3">
      <Popover.Root>
        <Popover.Trigger
          className="
            flex justify-between items-center h-11 pl-1.5 pr-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
          "
        >
          <User variant="sm" />
          <IconCaret width="11" height="11" color="dark:stroke-gray-400 stroke-white-300" />
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content className="relative bottom-9 left-[280px]">
            <div className="min-w-[306px] py-2 rounded-md dark:bg-gray-800 bg-white-900 drop-shadow-md">
              <User variant="md" />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <div className="flex flex-col gap-1">
        <Dialog.Root>
          <Dialog.Trigger
            className="
              flex flex-row items-center gap-2 h-8 px-2 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
          >
            <div className="flex justify-center items-center w-6">
              <IconSearch width="16" height="16" color="dark:stroke-gray-100 stroke-gray-300" />
            </div>
            <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">Pesquisar</span>
          </Dialog.Trigger>

          <SearchModal />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger
            className="
              flex flex-row items-center gap-2 h-8 px-2 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
          >
            <div className="flex justify-center items-center w-6">
              <IconSettings width="18" height="18" />
            </div>
            <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">Configurações</span>
          </Dialog.Trigger>

          <SettingsModal />
        </Dialog.Root>

        <Popover.Root>
          <Popover.Trigger
            className="
              flex flex-row items-center gap-2 h-8 px-2 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
          >
            <div className="flex justify-center items-center w-6">
              <IconTrash width="17" height="17" color="dark:stroke-gray-100 stroke-gray-300" />
            </div>
            <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">Lixeira</span>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content className="relative bottom-8 left-[127px]">
              <div className="absolute min-w-[392px] pt-1.5 pb-8.5 rounded-md dark:bg-gray-800 bg-white-900 drop-shadow-md">
                <Trash />
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </nav>
  )
}

export default Menu
