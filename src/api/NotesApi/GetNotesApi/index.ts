import { api } from '../../_core/axios'
import { GetNotesApiRequest } from './interfaces/request'
import { GetNotesApiResponse } from './interfaces/response'

const GetNotesApi = async (): Promise<GetNotesApiResponse> => {
  const response = await api.get('/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default GetNotesApi
export type { GetNotesApiRequest, GetNotesApiResponse }
