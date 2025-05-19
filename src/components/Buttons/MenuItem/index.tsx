/* eslint-disable react/display-name */
import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as Dialog from '@radix-ui/react-dialog'

type MenuItemAs = 'dialog-trigger' | 'popover-trigger' | 'button-trigger'
type MenuItemVariant = 'menu' | 'popover'

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as: MenuItemAs
  variant: MenuItemVariant
  icon: ReactNode
  label: string
  children?: ReactNode
  danger?: boolean
}

const MenuItem = ({ as, icon, label, variant, children, danger, ...props }: MenuItemProps) => {
  const baseClasses =
    'flex items-center gap-2 h-8 px-2 rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300'

  const variantClass: Record<MenuItemVariant, string> = {
    menu: 'dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75',
    popover: 'dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70 group',
  }

  const dangerClass = danger ? 'group-hover:text-red-500 duration-0 group' : ''

  switch (as) {
    case 'dialog-trigger':
      return (
        <Dialog.Root>
          <Dialog.Trigger className={`${baseClasses} ${variantClass[variant]} ${dangerClass}`}>
            <div className="flex justify-center items-center w-6">{icon}</div>
            <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">{label}</span>
          </Dialog.Trigger>

          {children}
        </Dialog.Root>
      )

    case 'popover-trigger':
      return (
        <Popover.Root>
          <Popover.Trigger className={`${baseClasses} ${variantClass[variant]} ${dangerClass}`}>
            <div className="flex justify-center items-center w-6">{icon}</div>
            <span className="flex items-center font-int text-sm dark:text-gray-100 text-gray-300">{label}</span>
          </Popover.Trigger>

          {children}
        </Popover.Root>
      )

    case 'button-trigger':
      return (
        <button className={`${baseClasses} ${variantClass[variant]}`} {...props}>
          <div className="flex justify-center items-center w-6">{icon}</div>
          <span className={`flex items-center font-int text-sm dark:text-gray-100 text-gray-300 ${dangerClass}`}>
            {label}
          </span>
        </button>
      )
  }
}

export default MenuItem
