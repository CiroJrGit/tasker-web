import { useNavigate } from 'react-router-dom'
import { useTaskLists } from '../hooks/useTaskLists'
import { useNotes } from '../hooks/useNotes'
import { TaskList, Note } from '../types/pagesTypes'
import clsx from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'
import * as Separator from '@radix-ui/react-separator'

import IconEdit from '../assets/icons/IconEdit'
import IconTrash from '../assets/icons/IconTrash'
import IconCheck from '../assets/icons/IconCheck'
import IconDuplicate from '../assets/icons/duplicate'
import IconPin from '../assets/icons/iconPin'
// import IconUnPin from '../assets/icons/iconUnPin'

interface EditPageProps {
  page: TaskList | Note
  type: string
}

const EditPage = ({ page, type }: EditPageProps) => {
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
            <Dialog.Root>
              <Dialog.Trigger
                className="
                flex items-center gap-2.5 h-8 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
              "
                type="button"
              >
                <div className="flex justify-center items-center w-5">
                  <IconEdit width="17" height="17" />
                </div>

                <span className="pt-px text-sm">Renomear</span>
              </Dialog.Trigger>

              {/* <Modal type="edit" list={list} /> */}
            </Dialog.Root>

            <div
              className="
              flex items-center gap-2.5 h-8 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
            "
            >
              <div className="flex justify-center items-center w-5">
                <IconDuplicate width="17" height="17" />
              </div>

              <span className="pt-px text-sm">Duplicar</span>
            </div>

            <div
              className="
              flex items-center gap-2.5 h-8 px-2 rounded-md dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
            "
            >
              <div className="flex justify-center items-center w-5">
                <IconPin width="17" height="17" />
                {/* <IconUnPin width="19" height="19" /> */}
              </div>

              <span className="pt-px text-sm">
                Fixar página
                {/* Desafixar página */}
              </span>
            </div>
          </div>

          <Separator.Root
            className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />

          <button
            className="
              flex items-center gap-2.5 h-8 px-2 rounded-md group duration-0
              dark:active:bg-gray-500/25 active:bg-white-600/70 dark:hover:bg-gray-600/90 hover:bg-white-700/75 hover:text-red-500
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
            "
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
          >
            <div className="flex justify-center items-center w-5 pb-px">
              <IconTrash
                width="17"
                height="17"
                color="dark:stroke-gray-100 stroke-gray-300 group-hover:stroke-red-500"
              />
            </div>
            <span className="text-sm">Excluir</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default EditPage
