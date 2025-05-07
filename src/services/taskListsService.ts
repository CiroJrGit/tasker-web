import TaskListsApi from '../api/TasklistsApi'
import { GetTaskListsApiResponse } from '../api/TasklistsApi/GetTaskListsApi'
import { GetTaskListsByIdApiRequest, GetTaskListsByIdApiResponse } from '../api/TasklistsApi/GetTaskListsByIdApi'
import { PostTaskListsApiRequest, PostTaskListsApiResponse } from '../api/TasklistsApi/PostTaskListsApi'
import { PutTaskListsApiRequest, PutTaskListsApiResponse } from '../api/TasklistsApi/PutTaskListsApi'
import { DeleteTaskListsApiRequest, DeleteTaskListsApiResponse } from '../api/TasklistsApi/DeleteTaskListApi'

export const taskListsService = {
  fetchTaskLists: async (): Promise<GetTaskListsApiResponse> => {
    const response = await TaskListsApi.getTaskLists()
    return response
  },

  fetchTaskListById: async (request: GetTaskListsByIdApiRequest): Promise<GetTaskListsByIdApiResponse> => {
    const response = await TaskListsApi.getTaskListssById(request)
    return response
  },

  createTaskList: async (request: PostTaskListsApiRequest): Promise<PostTaskListsApiResponse> => {
    const response = await TaskListsApi.postTaskLists(request)
    return response
  },

  updateTaskList: async (request: PutTaskListsApiRequest): Promise<PutTaskListsApiResponse> => {
    const response = await TaskListsApi.putTaskLists(request)
    return response
  },

  deleteTaskList: async (request: DeleteTaskListsApiRequest): Promise<DeleteTaskListsApiResponse> => {
    const response = await TaskListsApi.deleteTaskLists(request)
    return response
  },
}
