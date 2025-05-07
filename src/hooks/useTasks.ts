import { usePagesContext } from '../contexts/pagesContext'
import { tasksService } from '../services/tasksService'

const useTasks = () => {
  const { tasks, setTasks, loadingTasks, setLoadingTasks } = usePagesContext()

  async function loadTasks(listId: string) {
    const taskResponse = await tasksService.fetchTasks({ listId })

    setTasks(taskResponse)
    setLoadingTasks(false)
  }

  async function handleCreateTask(desc: string, taskListId: string) {
    // TO-DO: Alterar taskListId para listId
    await tasksService.createTask({ desc, taskListId })

    loadTasks(taskListId)
  }

  async function handleDeleteTask(id: string, listId: string) {
    await tasksService.deleteTask({ id })

    loadTasks(listId)
  }

  async function handleEditTask(id: string, desc: string, taskListId: string) {
    await tasksService.updateTask({ id, data: { desc } })

    loadTasks(taskListId)
  }

  async function handleToggleTask(id: string, completed: boolean, taskListId: string) {
    await tasksService.toggleTask({ id, data: { completed } })
    loadTasks(taskListId)
  }

  return {
    tasks,
    setTasks,
    loadingTasks,
    setLoadingTasks,
    loadTasks,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
    handleToggleTask,
  }
}

export { useTasks }
