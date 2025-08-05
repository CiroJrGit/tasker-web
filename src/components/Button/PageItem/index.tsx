/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { PageItemProps, pageItem, pageItemButton } from '@/types/buttonTypes'
import clsx from 'clsx'

import IconEdit from '@/assets/icons/IconEdit'
import IconBack from '@/assets/icons/IconBack'
import IconTrash from '@/assets/icons/IconTrash'

const PageItem = forwardRef<HTMLDivElement, PageItemProps>(
  ({ variant, title, color, onPrimaryAction, onSecondaryAction, showActions, ...props }, ref) => {
    return (
      <>
        <div
          className={pageItem({ variant })}
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

            <span className="max-w-[148px] text-sm dark:text-gray-100 text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
              {title}
            </span>
          </div>

          {showActions && (
            <div className={'flex gap-1.5'}>
              <button
                className={pageItemButton({ action: variant })}
                onClick={onPrimaryAction}
              >
                <div className="flex justify-center items-center w-5">
                  {variant === 'trash'
                    ? (<IconBack width="14" height="14" color="dark:text-gray-200 text-gray-200" />)
                    : (<IconEdit width="14" height="14" color="dark:text-gray-200 text-gray-200" />)
                  }
                </div>
              </button>

              <button
                className={pageItemButton({ action: variant })}
                onClick={onSecondaryAction}
              >
                <div className="flex justify-center items-center w-5 pt-px">
                  <IconTrash width="15" height="15" color="dark:text-gray-200 text-gray-200" />
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
