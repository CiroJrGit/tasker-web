import { api } from '@/api/_core/axios'
import { DeleteTaskListsApiRequest } from './interfaces/request'
import { DeleteTaskListsApiResponse } from './interfaces/response'

const DeleteTaskListsApi = async (request: DeleteTaskListsApiRequest): Promise<DeleteTaskListsApiResponse> => {
  const response = await api.delete(`/tasklists/${request.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default DeleteTaskListsApi
export type { DeleteTaskListsApiRequest, DeleteTaskListsApiResponse }
