import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
// import clsx from 'clsx';

import { PagesContext } from '../../contexts/pagesContext';
import { TaskListProps } from '../../types/pagesProps';

import * as Popover from '@radix-ui/react-popover';
import EditPage from '../../components/EditPage';

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
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-4xl dark:text-gray-50 text-gray-500">
              {taskList?.title}
            </h1>
          </div>
          <Popover.Root>
            <Popover.Trigger
              className="
                p-1 rounded-xl text-3xl dark:text-gray-300 text-white-400 dark:hover:bg-gray-600 hover:bg-white-700
                dark:active:bg-gray-700 active:bg-white-600/80 focus:outline-none focus-visible:ring-1.5
                dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-1
                dark:focus-visible:ring-offset-gray-900 focus-visible:ring-offset-white-900
              "
            >
              <IoEllipsisHorizontal />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="relative focus:outline-none">
                <EditPage page={taskList} />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-light leading-none text-4xl dark:text-gray-300">
            +
          </span>
          <span className="pt-0.5 text-lg dark:text-gray-300">
            Adicione uma tarefa
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default TaskList;
