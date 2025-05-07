import { api } from '../../_core/axios'
import { PostRegisterRequest } from './interfaces/request'
import { PostRegisterResponse } from './interfaces/response'

const PostRegister = async (request: PostRegisterRequest): Promise<PostRegisterResponse> => {
  const response = await api.post('/register', request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default PostRegister
export type { PostRegisterRequest, PostRegisterResponse }
