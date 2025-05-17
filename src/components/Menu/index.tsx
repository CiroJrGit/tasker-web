/* eslint-disable prettier/prettier */

import * as Popover from '@radix-ui/react-popover'
import UserCard from '../UserCard'
import MenuButton from '../MenuButton'
import AccountPopover from '../AccountPopover'
import SearchModal from '../Modal/SearchModal'
import SettingsModal from '../Modal/SettingsModal'
import Trash from '../Trash'

import IconSearch from '@/assets/icons/IconSearch'
import IconSettings from '@/assets/icons/IconSettings'
import IconTrash from '@/assets/icons/IconTrash'
import IconCaret from '@/assets/icons/IconCaret'

const Menu = () => {
  return (
    <nav className="flex flex-col gap-3">
      {/* TO-DO: AccountButton? */}
      <Popover.Root>
        <Popover.Trigger
          className="
            flex justify-between items-center h-11 pl-1.5 pr-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
          "
        >
          <UserCard variant="sm" />
          <IconCaret width="11" height="11" color="dark:stroke-gray-400 stroke-white-300" />
        </Popover.Trigger>

        <AccountPopover />
      </Popover.Root>
      
      <div className="flex flex-col gap-1">
        <MenuButton
          icon={<IconSearch width="16" height="16" color="dark:stroke-gray-100 stroke-gray-300" />}
          label="Pesquisar"
          triggerType="dialog"
        >
          <SearchModal />
        </MenuButton>

        <MenuButton
          icon={<IconSettings width="18" height="18" />}
          label="Configurações"
          triggerType="dialog"
        >
          <SettingsModal />
        </MenuButton>

        <MenuButton
          icon={<IconTrash width="17" height="17" color="dark:stroke-gray-100 stroke-gray-300" />}
          label="Lixeira"
          triggerType="popover"
        >
          <Trash />
        </MenuButton>
      </div>
    </nav>
  )
}

export default Menu
