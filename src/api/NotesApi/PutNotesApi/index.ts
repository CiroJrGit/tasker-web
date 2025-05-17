import { api } from '@/api/_core/axios'
import { PutNotesApiRequest } from './interfaces/request'
import { PutNotesApiResponse } from './interfaces/response'

const PutNotesApi = async (request: PutNotesApiRequest): Promise<PutNotesApiResponse> => {
  const response = await api.put(`/notes/${request.id}`, request.data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default PutNotesApi
export type { PutNotesApiRequest, PutNotesApiResponse }
