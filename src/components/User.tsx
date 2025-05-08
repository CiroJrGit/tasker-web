import { useAuth } from '../hooks/useAuth'

import * as Separator from '@radix-ui/react-separator'
// import * as Dialog from '@radix-ui/react-dialog'
// import ModalWrap from './ModalWrap'
// import ModalUser from './ModalUser'
// import IconSettings from '../assets/icons/IconSettings'
import IconLogout from '../assets/icons/IconLogout'
import IconCheck from '../assets/icons/IconCheck'

interface UserProps {
  variant: string
}

const User = ({ variant }: UserProps) => {
  const { user, handleSignOut } = useAuth()

  return (
    <>
      {variant === 'sm' && (
        <div className="flex items-center gap-2">
          <div className="px-2 rounded-md text-xl font-medium dark:text-gray-100 text-gray-300 dark:bg-gray-500 bg-white-600">
            <span className="duration-40">{user.name?.charAt(0).toUpperCase()}</span>
          </div>

          <div className="flex flex-col">
            <span className="block max-w-[175px] pt-0.5 text-base font-medium dark:text-gray-50 text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
              {user.name}
            </span>
          </div>
        </div>
      )}

      {variant === 'md' && (
        <div className="flex flex-col gap-3">
          <button
            className="
              flex justify-between items-center h-16 mx-2 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group
            "
          >
            <div className="flex flex-row gap-3">
              <div
                className="
                  flex justify-center items-center w-11 h-10.5 rounded-lg text-2.5xl font-medium dark:text-gray-100 text-gray-300 border dark:border-gray-500 border-white-500/40 dark:bg-gray-500 bg-white-600
                  dark:group-hover:bg-gray-500 dark:group-hover:border-gray-500 group-hover:bg-white-500 group-hover:border-white-400/10
                "
              >
                <span className="duration-40">{user.name?.charAt(0).toUpperCase()}</span>
              </div>

              <div className="flex justify-center flex-col">
                <span className="text-base font-medium dark:text-gray-50 text-gray-500 text-start whitespace-nowrap overflow-hidden text-ellipsistext-start">
                  {user.name}
                </span>

                <span className="font-int font-medium text-2xs dark:text-gray-300 text-white-300 text-start">
                  {user.email}
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center px-1">
              <IconCheck width="21" height="21" color="dark:stroke-gray-300 stroke-white-300" stroke="1.4" />
            </div>
          </button>

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
      )}
    </>
  )
}

export default User
