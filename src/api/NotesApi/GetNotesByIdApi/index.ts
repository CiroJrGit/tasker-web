import { api } from '@/api/_core/axios'
import { GetNotesByIdApiRequest } from './interfaces/request'
import { GetNotesByIdApiResponse } from './interfaces/response'

const GetNotesByIdApi = async (request: GetNotesByIdApiRequest): Promise<GetNotesByIdApiResponse> => {
  const response = await api.get(`/notes/${request.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default GetNotesByIdApi
export type { GetNotesByIdApiRequest, GetNotesByIdApiResponse }
