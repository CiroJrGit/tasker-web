import AuthApi, { AuthApiRequest, AuthApiResponse } from '../api/AuthApi'

export const authService = {
  fetchUser: async (request: string): Promise<AuthApiResponse> => {
    const response = await AuthApi.getAuthenticate(request)
    return response
  },

  createUser: async (request: AuthApiRequest): Promise<AuthApiResponse> => {
    const response = await AuthApi.postRegister(request)
    return response
  },
}
