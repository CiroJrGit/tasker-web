import { api } from '../_core/axios'
import { AuthApiRequest } from './interfaces/request'
import { AuthApiResponse } from './interfaces/response'

const AuthApi = {
  getAuthenticate: async (request: string): Promise<AuthApiResponse> => {
    const response = await api.get(`/authenticate/${request}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  },

  postRegister: async (request: AuthApiRequest): Promise<AuthApiResponse> => {
    const response = await api.post('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: request,
    })

    return response.data
  },
}

export default AuthApi
export type { AuthApiRequest, AuthApiResponse }
