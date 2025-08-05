import { useAuth } from '@/hooks/useAuth'

import * as Popover from '@radix-ui/react-popover'
import * as Separator from '@radix-ui/react-separator'
import SettingsModal from '@/components/Modal/SettingsModal'
import UserCard from '@/components/UserCard'
import MenuItem from '@/components/Button/MenuItem'

import IconCheck from '@/assets/icons/IconCheck'
import IconPlus from '@/assets/icons/IconPlus'
import IconSettings from '@/assets/icons/IconSettings'
import IconLogout from '@/assets/icons/IconLogout'

const AccountPopover = () => {
  const { handleSignOut } = useAuth()

  return (
    <Popover.Portal>
      <Popover.Content className="relative bottom-9 left-[280px]">
        <div className="min-w-[306px] py-2 rounded-md dark:bg-gray-800 bg-white-900 drop-shadow-md">
          <div className="flex flex-col gap-2">
            <div
              className="
                flex justify-between items-center h-16 mx-2 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group
              "
            >
              <UserCard variant="md" />
              <div className="flex justify-center items-center px-1">
                <IconCheck width="21" height="21" color="dark:text-gray-300 text-white-300" stroke="1.4" />
              </div>
            </div>

            <div className="px-1">
              <Separator.Root
                className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                decorative
              />
            </div>

            <div className="flex flex-col gap-1 mx-2">
              <MenuItem
                as="button-trigger"
                variant="popover"
                icon={<IconPlus width="15.5" height="15.5" color="dark:text-gray-100 text-gray-300" />}
                label="Adicionar conta"
                weight="medium"
                // onClick={}
                style={{ opacity: '0.4', pointerEvents: 'none' }} // TO-DO: Disabled CSS
              />
            </div>

            <div className="px-1">
              <Separator.Root
                className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                decorative
              />
            </div>

            <div className="flex flex-col gap-1 mx-2">
              <MenuItem
                as="dialog-trigger"
                variant="menu"
                icon={<IconSettings width="18" height="18" color="dark:text-gray-100 text-gray-300" />}
                label="Configurações"
                weight="medium"
                disabled
                style={{ opacity: '0.4', pointerEvents: 'none' }} // TO-DO: Disabled CSS
              >
                <SettingsModal />
              </MenuItem>

              <MenuItem
                as="button-trigger"
                variant="popover"
                icon={<IconLogout width="15" height="15" color="dark:text-gray-100 text-gray-300" />}
                label="Sair"
                weight="medium"
                onClick={() => handleSignOut()}
              />
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Portal>
  )
}

export default AccountPopover
