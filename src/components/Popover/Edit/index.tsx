import { useNavigate } from 'react-router-dom'
import { useTaskLists } from '@/hooks/useTaskLists'
import { useNotes } from '@/hooks/useNotes'
import { TaskList, Note } from '@/types/pagesTypes'
import clsx from 'clsx'

import * as Separator from '@radix-ui/react-separator'
import MenuItem from '@/components/Buttons/MenuItem'

import IconEdit from '@/assets/icons/IconEdit'
import IconTrash from '@/assets/icons/IconTrash'
import IconCheck from '@/assets/icons/IconCheck'
import IconDuplicate from '@/assets/icons/IconDuplicate'
import IconPin from '@/assets/icons/IconPin'
// import IconUnPin from '../assets/icons/iconUnPin'

interface EditProps {
  page: TaskList | Note
  type: 'tasklist' | 'note'
}

const Edit = ({ page, type }: EditProps) => {
  const { handleEditTaskList } = useTaskLists()
  const { handleEditNote } = useNotes()

  const navigate = useNavigate()
  const colors = ['#265EED', '#8029EE', '#EE29B7', '#F4385A', '#EE9329', '#29EE9B']

  return (
    <>
      <div className="flex flex-col gap-2.5 pt-3.5 pb-3 rounded-lg font-int dark:bg-gray-800 bg-white-900">
        <div className="flex flex-col gap-4 px-3.5">
          <span className="font-medium text-xs dark:text-gray-100 text-gray-300">Cor de destaque</span>

          <div className="flex justify-between pb-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className={clsx(
                  'flex justify-center items-center w-5 h-5 pt-px rounded-[5px] hover:bg-opacity-75 focus:outline-none focus-visible:ring-1.5',
                  'dark:focus-visible:ring-gray-200 focus-visible:ring-gray-200/90 ring-offset-1 dark:ring-offset-gray-700 ring-offset-white-700',
                  {
                    'bg-main-blue ring-main-blue': color === '#265EED',
                    'bg-main-purple ring-main-purple': color === '#8029EE',
                    'bg-main-pink ring-main-pink': color === '#EE29B7',
                    'bg-main-red ring-main-red': color === '#F4385A',
                    'bg-main-yellow ring-main-yellow': color === '#EE9329',
                    'bg-main-green ring-main-green': color === '#29EE9B',

                    'ring-[0.8px] ring-offset-[1.3px]': color === page.color,
                  },
                )}
                onClick={
                  type === 'tasklist'
                    ? () => handleEditTaskList(page.id, page.title, color, page.deleted)
                    : () => handleEditNote(page.id, page.title, color, page.deleted)
                }
              >
                {color === page.color && <IconCheck width="13" height="13" color="stroke-gray-50" stroke="2.2" />}
              </button>
            ))}
          </div>
        </div>

        <div className="px-1.5">
          <Separator.Root
            className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />
        </div>

        <div className="flex flex-col gap-2.5 px-1.5 dark:text-gray-100 text-gray-300">
          <div className="flex flex-col gap-1">
            <MenuItem
              as="button-trigger"
              variant="popover"
              icon={<IconEdit width="17" height="17" />}
              label="Renomear"
              onClick={() => console.log('Renomear')}
            />

            <MenuItem
              as="button-trigger"
              variant="popover"
              icon={<IconDuplicate width="17" height="17" />}
              label="Duplicar"
              onClick={() => console.log('Duplicar')}
            />

            <MenuItem
              as="button-trigger"
              variant="popover"
              icon={<IconPin width="17" height="17" />}
              // icon={<IconUnPin width="19" height="19" />}
              label="Fixar página"
              // label="Desafixar página"
              onClick={() => console.log('Fixar página')}
            />
          </div>

          <Separator.Root
            className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />

          <MenuItem
            as="button-trigger"
            variant="popover"
            icon={
              <IconTrash
                width="17"
                height="17"
                color="dark:stroke-gray-100 stroke-gray-300 group-hover:stroke-red-500"
              />
            }
            label="Mover para lixeira"
            onClick={
              type === 'tasklist'
                ? () => {
                    handleEditTaskList(page.id, page.title, page.color, true)
                    navigate('/welcome')
                  }
                : () => {
                    handleEditNote(page.id, page.title, page.color, true)
                    navigate('/welcome')
                  }
            }
            danger
          />
        </div>
      </div>
    </>
  )
}

export default Edit
