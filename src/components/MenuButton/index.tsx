import { ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as Dialog from '@radix-ui/react-dialog'

interface MenuButtonProps {
  icon: React.ReactNode
  label: string
  children: ReactNode
  triggerType: 'dialog' | 'popover'
}

const MenuButton = ({ icon, label, children, triggerType }: MenuButtonProps) => {
  if (triggerType === 'dialog') {
    return (
      <Dialog.Root>
        <Dialog.Trigger
          className="
            flex flex-row items-center gap-2 h-8 px-2 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
          "
        >
          <div className="flex justify-center items-center w-6">{icon}</div>
          <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">{label}</span>
        </Dialog.Trigger>

        {children}
      </Dialog.Root>
    )
  }

  if (triggerType === 'popover') {
    return (
      <Popover.Root>
        <Popover.Trigger
          className="
            flex flex-row items-center gap-2 h-8 px-2 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
          "
        >
          <div className="flex justify-center items-center w-6">{icon}</div>
          <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">{label}</span>
        </Popover.Trigger>

        {children}
      </Popover.Root>
    )
  }
}

export default MenuButton
