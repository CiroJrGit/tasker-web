import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import { setAuthorization } from '../lib/authorization';

import {
  TaskListProps,
  TaskProps,
  PagesProviderProps,
  PagesContextProps,
} from '../types/pagesProps';

export const PagesContext = createContext<PagesContextProps>(
  {} as PagesContextProps,
);

const PagesProvider = ({ children }: PagesProviderProps) => {
  // states lista de tarefas
  const [taskLists, setTaskLists] = useState<TaskListProps[]>([]);
  // const [loadingTaskLists, setLoadingTaskLists] = useState(true);

  // states tarefas
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(true);

  const navigate = useNavigate();

  // carregar listas de tarefas
  async function loadTaskLists() {
    const authorization = setAuthorization();

    const taskListResponse = await api.get('/tasklists', authorization);
    setTaskLists(taskListResponse.data);
    // setLoadingTaskLists(false);
  }

  // obter uma lista de tarefas
  async function handleGetTaskList(id: string) {
    const authorization = setAuthorization();

    const taskListResponse = await api.get(`/tasklists/${id}`, authorization);
    const taskList: TaskListProps = taskListResponse.data;

    // loadTasks(taskList.id);
    return taskList;
  }

  // criar lista de tarefas
  async function handleCreateTaskList(title: string, color: string) {
    const authorization = setAuthorization();

    const newTaskList = await api.post(
      '/tasklists',
      { title, color },
      authorization,
    );

    const newTaskListId = newTaskList.data;

    loadTaskLists();
    navigate(`/tasklist/${newTaskListId}`);
  }

  // carregar tarefas
  async function loadTasks(listId: string) {
    const authorization = setAuthorization();

    const taskResponse = await api.get(`/tasks/${listId}`, authorization);

    setTasks(taskResponse.data);
    setLoadingTasks(false);
  }

  return (
    <PagesContext.Provider
      value={{
        taskLists,
        setTaskLists,
        // loadingTaskLists,
        // setLoadingTaskLists,
        loadTaskLists,
        handleGetTaskList,
        handleCreateTaskList,
        // handleDeleteTaskList,
        // handleEditTaskList,

        // tasks,
        // loadingTasks,
        // setTasks,
        // setLoadingTasks,
        // loadTasks,
        // handleCreateTask,
        // handleDeleteTask,
        // handleEditTask,
        // handleToggleTask,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};

export default PagesProvider;
