import { api } from '@/api/_core/axios'
import { GetTasksApiRequest } from './interfaces/request'
import { GetTasksApiResponse } from './interfaces/response'

const GetTasksApi = async (request: GetTasksApiRequest): Promise<GetTasksApiResponse> => {
  const response = await api.get(`/tasks/${request.listId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}
export default GetTasksApi
export type { GetTasksApiRequest, GetTasksApiResponse }
