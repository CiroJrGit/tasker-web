import { useNavigate } from 'react-router-dom'
import { usePagesContext } from '../contexts/pagesContext'
import { useTasks } from './useTasks'
import { taskListsService } from '../services/taskListsService'
import { tasksService } from '../services/tasksService'

const useTaskLists = () => {
  const navigate = useNavigate()

  const { loadTasks } = useTasks()
  const { taskLists, setTaskLists, loadingTaskLists, setLoadingTaskLists } = usePagesContext()

  async function loadTaskLists() {
    setLoadingTaskLists(true)
    const result = await taskListsService.fetchTaskLists()

    if (result) {
      setTaskLists(result)
    }

    setLoadingTaskLists(false)
    return result
  }

  async function handleGetTaskList(id: string) {
    const result = await taskListsService.fetchTaskListById({ id })
    const taskList = result

    loadTasks(taskList.id)
    return taskList
  }

  async function handleCreateTaskList(title: string, color: string) {
    const result = await taskListsService.createTaskList({ title, color })
    const newTaskListId = result

    loadTaskLists()
    navigate(`/tasklists/${newTaskListId}`)
  }

  async function handleDeleteTaskList(id: string) {
    await tasksService.deleteAllTasks({ listId: id })
    await taskListsService.deleteTaskList({ id })

    loadTaskLists()
  }

  async function handleEditTaskList(
    id: string | undefined,
    title: string | undefined,
    color: string | undefined,
    deleted: boolean | undefined,
  ) {
    await taskListsService.updateTaskList({ id, data: { title, color, deleted } })

    loadTaskLists()
  }

  return {
    taskLists,
    setTaskLists,
    loadingTaskLists,
    setLoadingTaskLists,
    loadTaskLists,
    handleGetTaskList,
    handleCreateTaskList,
    handleDeleteTaskList,
    handleEditTaskList,
  }
}

export { useTaskLists }
