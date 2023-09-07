import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import clsx from 'clsx';

import { PagesContext } from '../../contexts/pagesContext';
import { TaskListProps } from '../../types/pagesProps';

import * as Popover from '@radix-ui/react-popover';
import EditPage from '../../components/EditPage';
import NewTask from './components/NewTask';

import { IoEllipsisHorizontal } from 'react-icons/io5';

const TaskList = () => {
  const {
    taskLists,
    handleGetTaskList,
    // tasks,
    // loadingTasks, loadTasks,
  } = useContext(PagesContext);

  const { id } = useParams();
  const [taskList, setTaskList] = useState<TaskListProps | any>();

  useEffect(() => {
    getTaskList();

    // if (taskList) {
    //   loadTasks(taskList.id);
    // }
  }, [id, taskLists]);

  async function getTaskList() {
    if (id) {
      const taskListResponse = await handleGetTaskList(id);
      setTaskList(taskListResponse);
    }
  }

  return (
    <div className="space-y-14">
      <div className="space-y-9">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span
              className={clsx('block  w-1.5 h-7 rounded-sm', {
                'bg-main-blue': taskList?.color === '#265EED',
                'bg-main-purple': taskList?.color === '#8029EE',
                'bg-main-pink': taskList?.color === '#EE29B7',
                'bg-main-red': taskList?.color === '#F4385A',
                'bg-main-yellow': taskList?.color === '#EE9329',
                'bg-main-green': taskList?.color === '#29EE9B',
              })}
              aria-hidden="true"
            ></span>

            <h1 className="font-semibold text-4xl dark:text-gray-50 text-gray-500">
              {taskList?.title}
            </h1>
          </div>

          <Popover.Root>
            <Popover.Trigger
              className="
                h-[34px] px-0.5 rounded-md text-3xl dark:text-gray-300 text-white-400 dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-800/80 active:bg-white-600/75
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
              "
            >
              <IoEllipsisHorizontal />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="relative focus:outline-none">
                <div className="absolute -right-8 drop-shadow-md">
                  <EditPage page={taskList} />
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        <div className="flex flex-row-reverse items-center gap-2">
          <NewTask />

          {/* <span className="font-light leading-none text-4xl dark:text-gray-300">
            +
          </span>
          <span className="pt-0.5 text-lg dark:text-gray-300">
            Adicione uma tarefa
          </span> */}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default TaskList;
