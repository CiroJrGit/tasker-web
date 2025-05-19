import { useAuth } from '@/hooks/useAuth'

import * as Popover from '@radix-ui/react-popover'
import * as Separator from '@radix-ui/react-separator'
import UserCard from '@/components/UserCard'

import IconLogout from '@/assets/icons/IconLogout'
import IconCheck from '@/assets/icons/IconCheck'

const AccountPopover = () => {
  const { handleSignOut } = useAuth()

  return (
    <Popover.Portal>
      <Popover.Content className="relative bottom-9 left-[280px]">
        <div className="min-w-[306px] py-2 rounded-md dark:bg-gray-800 bg-white-900 drop-shadow-md">
          <div className="flex flex-col gap-3">
            <div
              className="
                flex justify-between items-center h-16 mx-2 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group
              "
            >
              <UserCard variant="md" />
              <div className="flex justify-center items-center px-1">
                <IconCheck width="21" height="21" color="dark:stroke-gray-300 stroke-white-300" stroke="1.4" />
              </div>
            </div>
            <div className="px-1">
              <Separator.Root
                className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                decorative
              />
            </div>

            <div className="flex flex-col gap-1">
              {/* <Dialog.Root>
              <Dialog.Trigger className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300">
                <div className="flex flex-row items-center gap-2 h-8 mx-1 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-600/70 dark:active:bg-gray-500/30 active:bg-white-600">
                  <div className="flex justify-center items-center w-6">
                    <IconSettings width="19" height="19" />
                  </div>
                  <span className="flex items-center font-int font-medium text-sm dark:text-gray-100 text-gray-300">
                    Configurações
                  </span>
                </div>
              </Dialog.Trigger>

              <ModalWrap title="Configurações do usuário">
                <ModalUser />
              </ModalWrap>
            </Dialog.Root> */}

              <button
                className="focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300"
                onClick={() => handleSignOut()}
              >
                <div className="flex flex-row items-center gap-2 h-8 mx-2 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70">
                  <div className="flex justify-center items-center w-6">
                    <IconLogout width="16" height="16" />
                  </div>
                  <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">Sair</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Portal>
  )
}

export default AccountPopover
