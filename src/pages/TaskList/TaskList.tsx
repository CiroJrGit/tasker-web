import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import clsx from 'clsx'

import { PagesContext } from '../../contexts/pagesContext'
import { TaskListProps } from '../../types/pagesProps'

import * as Popover from '@radix-ui/react-popover'
import EditPage from '../../components/EditPage'
import NewTask from './components/NewTask'
import Tasks from './components/Tasks'

import IconEllipsis from '../../assets/icons/IconEllipsis'

const TaskList = () => {
  const { taskLists, handleGetTaskList, tasks, loadingTasks, loadTasks } =
    useContext(PagesContext)

  const { id } = useParams()
  const [taskList, setTaskList] = useState<TaskListProps | any>()

  useEffect(() => {
    getTaskList()

    if (taskList) {
      loadTasks(taskList.id)
    }
  }, [id, taskLists])

  async function getTaskList() {
    if (id) {
      const taskListResponse = await handleGetTaskList(id)
      setTaskList(taskListResponse)
    }
  }

  return (
    <div className="h-full space-y-14">
      <div className="space-y-10">
        <div className="flex justify-between items-center px-1">
          <div className="flex items-center gap-2.5">
            <span
              className={clsx('block w-1.5 h-[26px] rounded-sm', {
                'bg-main-blue': taskList?.color === '#265EED',
                'bg-main-purple': taskList?.color === '#8029EE',
                'bg-main-pink': taskList?.color === '#EE29B7',
                'bg-main-red': taskList?.color === '#F4385A',
                'bg-main-yellow': taskList?.color === '#EE9329',
                'bg-main-green': taskList?.color === '#29EE9B',
              })}
              aria-hidden="true"
            ></span>

            <h1 className="font-semibold text-3.5xl dark:text-gray-50 text-gray-500">
              {taskList?.title}
            </h1>
          </div>

          <div className="absolute top-0 right-11 p-4">
            <Popover.Root>
              <Popover.Trigger
                className="
                  flex justify-center items-center w-[30px] h-[30px] rounded-md text-3xl dark:text-gray-300 text-white-400
                  dark:hover:bg-gray-800/80 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
                  focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
                "
              >
                <IconEllipsis width="20" height="20" />
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content className="relative top-2.5 right-[146px] focus:outline-none">
                  <div className="absolute w-[200px] drop-shadow-md">
                    <EditPage page={taskList} type="tasklist" />
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-2">
          <NewTask listId={taskList?.id} />
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-32">
        {loadingTasks && <span>Carregando tarefas...</span>}

        {tasks.length === 0 && !loadingTasks && <span>Sem tarefas.</span>}

        {!loadingTasks && (
          <Tasks
            tasks={tasks}
            listColor={taskList?.color}
            listId={taskList?.id}
          />
        )}
      </div>
    </div>
  )
}

export default TaskList
