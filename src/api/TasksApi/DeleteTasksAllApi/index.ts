import { api } from '@/api/_core/axios'
import { DeleteTasksAllApiRequest } from './interfaces/request'
import { DeleteTasksAllApiResponse } from './interfaces/response'

const DeleteTasksAllApi = async (request: DeleteTasksAllApiRequest): Promise<DeleteTasksAllApiResponse> => {
  const response = await api.delete(`/tasks/${request.listId}/all`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default DeleteTasksAllApi
export type { DeleteTasksAllApiRequest, DeleteTasksAllApiResponse }
