import { api } from '../../_core/axios'
import { DeleteNotesApiRequest } from './interfaces/request'
import { DeleteNotesApiResponse } from './interfaces/response'

const DeleteNotesApi = async (request: DeleteNotesApiRequest): Promise<DeleteNotesApiResponse> => {
  const response = await api.delete(`/notes/${request.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default DeleteNotesApi
export type { DeleteNotesApiRequest, DeleteNotesApiResponse }
