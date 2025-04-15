import { api } from '../../_core/axios'

import { PutNotesApiRequest } from './interfaces/request'
import { PutNotesApiResponse } from './interfaces/response'

const PutNotesApi = async (request: PutNotesApiRequest): Promise<PutNotesApiResponse> => {
  const response = await api.put(`/notes/${request.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: request,
  })

  return response.data
}

export default PutNotesApi
export type { PutNotesApiRequest, PutNotesApiResponse }
