/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import { forwardRef, MouseEventHandler } from 'react'
import clsx from 'clsx'

import IconEdit from '@/assets/icons/IconEdit'
import IconBack from '@/assets/icons/IconBack'
import IconTrash from '@/assets/icons/IconTrash'

type PageItemVariant = 'menu' | 'search' | 'trash'

interface PageItemProps {
  variant: PageItemVariant
  color: string
  title: string
  onPrimaryAction?: MouseEventHandler
  onSecondaryAction?: MouseEventHandler
  showActions?: boolean
}

const PageItem = forwardRef<HTMLDivElement, PageItemProps>(
  ({ title, color, variant, onPrimaryAction, onSecondaryAction, showActions, ...props }, ref) => {
    const baseClasses = 'flex justify-between items-center h-8 px-3 font-int rounded-md'
    
    const variantClass: Record<PageItemVariant, string> = {
      menu: 'dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75 dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700/70 dark:group-[.active]:active:bg-gray-700/70 group-[.active]:active:bg-white-600/75',
      search: 'dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75 dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700/70 dark:group-[.active]:active:bg-gray-700/70 group-[.active]:active:bg-white-600/75',
      trash: 'dark:hover:bg-gray-600/95 hover:bg-white-700/75 cursor-pointer',
    }

    const baseButtonClasses = 'flex justify-center items-center w-6 h-6 rounded-2sm focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400'

    const variantButtonClass: Record<PageItemVariant, string> = {
      menu: 'dark:hover:bg-gray-500/70 hover:bg-white-500/90 dark:active:bg-gray-500/40 active:bg-white-400/60',
      search: 'dark:hover:bg-gray-500/70 hover:bg-white-500/90 dark:active:bg-gray-500/40 active:bg-white-400/60',
      trash: 'dark:hover:bg-gray-400/60 hover:bg-white-500/90 dark:active:bg-gray-400/35 active:bg-white-400/50',
    }

    return (
      <>
        <div
          className={`${baseClasses} ${variantClass[variant]}`}
          ref={ref}
          {...props}
        >
          <div className="flex items-center gap-2.5">
            <span
              className={clsx(
                'block w-2 h-2 rounded-sm', // TO-DO: Refinar codigo group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
                {
                  'bg-main-blue': color === '#265EED',
                  'bg-main-purple': color === '#8029EE',
                  'bg-main-pink': color === '#EE29B7',
                  'bg-main-red': color === '#F4385A',
                  'bg-main-yellow': color === '#EE9329',
                  'bg-main-green': color === '#29EE9B',
                },
              )}
              aria-hidden="true"
            ></span>

            <span className="max-w-[148px] text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
              {title}
            </span>
          </div>

          {showActions && (
            <div className={'flex gap-2'}>
              <button
                className={`${baseButtonClasses} ${variantButtonClass[variant]}`}
                onClick={onPrimaryAction}
              >
                <div className="flex justify-center items-center w-5">
                  {variant === 'trash'
                    ? (<IconBack width="14" height="14" />)
                    : (<IconEdit width="16" height="16" />)
                  }
                </div>
              </button>

              <button
                className={`${baseButtonClasses} ${variantButtonClass[variant]}`}
                onClick={onSecondaryAction}
              >
                <div className="flex justify-center items-center w-5">
                  <IconTrash width="16" height="16" color="dark:stroke-gray-100 stroke-gray-300" />
                </div>
              </button>
            </div>
          )}
        </div>
      </>
    )
  }
)

export default PageItem
