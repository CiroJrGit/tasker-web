import GetAuthenticate, { GetAuthenticateRequest } from './GetAuthenticate'
import PostRegister, { PostRegisterRequest } from './PostRegister'

const AuthApi = {
  getAuthenticate: (request: GetAuthenticateRequest) => GetAuthenticate(request),
  postRegister: (request: PostRegisterRequest) => PostRegister(request),
}

export default AuthApi
