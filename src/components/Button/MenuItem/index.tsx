/* eslint-disable react/display-name */
import { MenuItemProps, menuItem } from '@/types/buttonTypes'

import * as Popover from '@radix-ui/react-popover'
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

const MenuItem = ({ as, variant, icon, label, size, weight, danger, children, ...props }: MenuItemProps) => {
  const iconItem = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        color: danger ? `${icon.props.color ?? ''} group-hover:text-red-500`.trim() : icon.props.color,
      })
    : icon

  switch (as) {
    case 'dialog-trigger':
      return (
        <Dialog.Root>
          <Dialog.Trigger {...props} className={menuItem({ as, variant, size, weight })}>
            <div className="flex justify-center items-center w-5">{iconItem}</div>
            <span
              className={`flex items-center text-sm dark:text-gray-100 text-gray-300
                ${danger ? 'group-hover:text-red-500 duration-0' : ''}
              `}
            >
              {label}
            </span>
          </Dialog.Trigger>

          {children}
        </Dialog.Root>
      )

    case 'popover-trigger':
      return (
        <Popover.Root>
          <Popover.Trigger {...props} className={menuItem({ as, variant, size, weight })}>
            <div className="flex justify-center items-center w-5">{iconItem}</div>
            <span
              className={`flex items-center text-sm dark:text-gray-100 text-gray-300
                ${danger ? 'group-hover:text-red-500 duration-0' : ''}
              `}
            >
              {label}
            </span>
          </Popover.Trigger>

          {children}
        </Popover.Root>
      )

    case 'button-trigger':
      return (
        <button {...props} className={menuItem({ as, variant, size, weight })}>
          <div className="flex justify-center items-center w-5">{iconItem}</div>
          <span
            className={`flex items-center text-sm dark:text-gray-100 text-gray-300
              ${danger ? 'group-hover:text-red-500 duration-0' : ''}
            `}
          >
            {label}
          </span>
        </button>
      )
  }
}

export default MenuItem
