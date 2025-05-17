import { api } from '@/api/_core/axios'
import { GetAuthenticateRequest } from './interfaces/request'
import { GetAuthenticateResponse } from './interfaces/response'

const GetAuthenticate = async (request: GetAuthenticateRequest): Promise<GetAuthenticateResponse> => {
  const response = await api.get(`/authenticate/${request.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default GetAuthenticate
export type { GetAuthenticateRequest, GetAuthenticateResponse }
