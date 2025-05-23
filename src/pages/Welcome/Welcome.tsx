import { useAuth } from '@/hooks/useAuth'

import * as Dialog from '@radix-ui/react-dialog'
import NewPageModal from '@/components/Modal/NewPageModal'

import IconCheckbox from '@/assets/icons/IconCheckbox'
import IconNote from '@/assets/icons/IconNote'

const WelcomePage = () => {
  const { user } = useAuth()
  const firstName = user.name?.trim().split(' ')

  return (
    <div className="flex flex-col gap-16 w-11/12">
      <div className="flex flex-col gap-5 px-3">
        <h1 className="text-4xl font-semibold dark:text-gray-400 text-white-400">
          Bem-vindo, {firstName ? firstName[0] : 'Usuário'}
        </h1>

        <p className="text-lg font-normal dark:text-gray-400 text-white-400">
          Comece adicionando uma lista de tarefas ou uma página de anotações.
        </p>
      </div>

      <div className="flex flex-col gap-3 px-4">
        <Dialog.Root>
          <Dialog.Trigger
            className="
              flex items-center gap-2 p-1.5 rounded-md text-start dark:text-gray-400 text-white-400 dark:hover:text-gray-100 hover:text-gray-300 
              dark:hover:bg-gray-800/70 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
            type="button"
          >
            <div className="flex justify-center items-center w-6">
              <IconCheckbox width="20" height="20" color="dark:stroke-gray-400 stroke-white-400" />
            </div>
            <span className="pt-px font-medium duration-10">Lista de tarefas</span>
          </Dialog.Trigger>

          <NewPageModal page="tasklist" />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger
            className="
              flex items-center gap-2 p-1.5 rounded-md text-start dark:text-gray-400 text-white-400 dark:hover:text-gray-100 hover:text-gray-300
              dark:hover:bg-gray-800/70 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
            type="button"
          >
            <div className="flex justify-center items-center w-6">
              <IconNote width="22" height="22" color="dark:stroke-gray-400 stroke-white-400" />
            </div>
            <span className="pt-px font-medium duration-10">Página de anotações</span>
          </Dialog.Trigger>

          <NewPageModal page="notes" />
        </Dialog.Root>
      </div>
    </div>
  )
}

export default WelcomePage
