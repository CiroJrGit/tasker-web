import { api } from '@/api/_core/axios'
import { DeleteTasksApiRequest } from './interfaces/request'
import { DeleteTasksApiResponse } from './interfaces/response'

const DeleteTasksAllApi = async (request: DeleteTasksApiRequest): Promise<DeleteTasksApiResponse> => {
  const response = await api.delete(`/tasks/${request.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default DeleteTasksAllApi
export type { DeleteTasksApiRequest, DeleteTasksApiResponse }
