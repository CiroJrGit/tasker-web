import TasksApi from '../api/TasksApi'
import { DeleteTasksAllApiRequest, DeleteTasksAllApiResponse } from '../api/TasksApi/DeleteTasksAllApi'
import { DeleteTasksApiRequest, DeleteTasksApiResponse } from '../api/TasksApi/DeleteTasksApi'
import { GetTasksApiRequest, GetTasksApiResponse } from '../api/TasksApi/GetTasksApi'
import { PostTasksApiRequest, PostTasksApiResponse } from '../api/TasksApi/PostTasksApi'
import { PutTasksApiRequest, PutTasksApiResponse } from '../api/TasksApi/PutTasksApi'
import { PutTasksToggleApiRequest, PutTasksToggleApiResponse } from '../api/TasksApi/PutTasksToggleApi'

export const tasksService = {
  fetchTasks: async (request: GetTasksApiRequest): Promise<GetTasksApiResponse> => {
    const response = await TasksApi.getTasks(request)
    return response
  },

  createTask: async (request: PostTasksApiRequest): Promise<PostTasksApiResponse> => {
    const response = await TasksApi.postTasks(request)
    return response
  },

  updateTask: async (request: PutTasksApiRequest): Promise<PutTasksApiResponse> => {
    const response = await TasksApi.putTasks(request)
    return response
  },

  toggleTask: async (request: PutTasksToggleApiRequest): Promise<PutTasksToggleApiResponse> => {
    const response = await TasksApi.putTasksToggle(request)
    return response
  },

  deleteTask: async (request: DeleteTasksApiRequest): Promise<DeleteTasksApiResponse> => {
    const response = await TasksApi.deleteTasks(request)
    return response
  },

  deleteAllTasks: async (request: DeleteTasksAllApiRequest): Promise<DeleteTasksAllApiResponse> => {
    const response = await TasksApi.deleteTasksAll(request)
    return response
  },
}
