import { useState } from 'react'
import { useTasks } from '@/hooks/useTasks'
import { Task } from '@/types/pagesTypes'
import clsx from 'clsx'

import * as Checkbox from '@radix-ui/react-checkbox'
import * as Popover from '@radix-ui/react-popover'

import IconClose from '@/assets/icons/IconClose'
import IconEditPen from '@/assets/icons/IconEditPen'
import IconCheck from '@/assets/icons/IconCheck'

interface TaskItemProps {
  tasks: Task[]
  listColor: string
  listId: string
}

const TaskPage = ({ tasks, listColor, listId }: TaskItemProps) => {
  const { handleToggleTask, handleDeleteTask, handleEditTask } = useTasks()

  const [descTask, setDescTask] = useState('')

  function handleAlternateEdit(id: string, desc: string, listId: string) {
    if (descTask !== desc && descTask !== '') {
      handleEditTask(id, descTask, listId)
    }
  }

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center px-3 rounded-md dark:hover:bg-gray-800/80 hover:bg-white-800/60 group"
        >
          <Checkbox.Root
            className="flex items-center gap-4 w-full h-10 group focus:outline-none disabled:opacity-30"
            onCheckedChange={() => handleToggleTask(task.id, !task.completed, listId)}
            checked={task.completed}
          >
            <div
              className={clsx(
                'flex justify-center items-center w-5 h-5 pt-px rounded-[5px] dark:bg-gray-950 bg-white-950 border dark:border-gray-300 border-gray-200',
                {
                  'group-data-[state=checked]:bg-main-blue group-data-[state=checked]:border-main-blue group-focus:ring-2':
                    listColor === '#265EED',
                  'group-data-[state=checked]:bg-main-purple group-data-[state=checked]:border-main-purple group-focus:ring-2':
                    listColor === '#8029EE',
                  'group-data-[state=checked]:bg-main-pink group-data-[state=checked]:border-main-pink group-focus:ring-2':
                    listColor === '#EE29B7',
                  'group-data-[state=checked]:bg-main-red group-data-[state=checked]:border-main-red group-focus:ring-2':
                    listColor === '#F4385A',
                  'group-data-[state=checked]:bg-main-yellow group-data-[state=checked]:border-main-yellow group-focus:ring-2':
                    listColor === '#EE9329',
                  'group-data-[state=checked]:bg-main-green group-data-[state=checked]:border-main-green group-focus:ring-2':
                    listColor === '#29EE9B',
                },
              )}
            >
              <Checkbox.Indicator>
                <IconCheck width="12" height="13" color="stroke-gray-50" stroke="2.4" />
              </Checkbox.Indicator>
            </div>

            <span
              className="
                font-int text-base dark:text-gray-50 text-gray-500 bg-transparent group-data-[state=checked]:line-through
                dark:group-data-[state=checked]:text-gray-400 group-data-[state=checked]:text-white-400 group-data-[state=checked]:font-medium cursor-pointer
              "
            >
              {task.desc}
            </span>
          </Checkbox.Root>

          <div className="flex gap-2">
            <Popover.Root>
              <Popover.Trigger
                className="
                  p-1.5 rounded-lg dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                  focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700 opacity-0 group-hover:opacity-100
                "
              >
                <IconEditPen width="17" height="17" color="dark:stroke-gray-300 stroke-white-400" />
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content className="focus:outline-none">
                  <div className="absolute -left-[578.6px] -top-[35px] flex gap-2 items-center rounded-lg bg-transparent">
                    <input
                      className="mt-1 p-1 w-[555px] rounded-md dark:text-gray-100 text-gray-500 dark:bg-gray-700 bg-white-700 focus:outline-none"
                      type="text"
                      onChange={(e) => setDescTask(e.target.value)}
                      defaultValue={task.desc}
                    />
                    {/* border dark:border-gray-300 border-white-400 */}
                    <Popover.Close
                      className="mt-1 p-1.5 rounded-lg dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60"
                      onClick={() => handleAlternateEdit(task.id, task.desc, listId)}
                    >
                      <IconEditPen width="18" height="17" color="dark:stroke-gray-300 stroke-white-400" />
                    </Popover.Close>
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
            <button
              className="
                p-2 rounded-lg dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700 opacity-0 group-hover:opacity-100
              "
              onClick={() => handleDeleteTask(task.id, listId)}
            >
              <IconClose width="13" height="14" />
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default TaskPage
