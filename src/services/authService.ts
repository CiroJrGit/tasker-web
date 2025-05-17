import AuthApi from '../api/AuthApi'
import { GetAuthenticateRequest, GetAuthenticateResponse } from '../api/AuthApi/GetAuthenticate'
import { PostRegisterRequest, PostRegisterResponse } from '../api/AuthApi/PostRegister'

export const authService = {
  fetchUser: async (request: GetAuthenticateRequest): Promise<GetAuthenticateResponse> => {
    const response = await AuthApi.getAuthenticate(request)
    return response
  },

  createUser: async (request: PostRegisterRequest): Promise<PostRegisterResponse> => {
    const response = await AuthApi.postRegister(request)
    return response
  },
}
