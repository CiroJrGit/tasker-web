import { api } from '../../_core/axios'
import { PostTasksApiRequest } from './interfaces/request'
import { PostTasksApiResponse } from './interfaces/response'

const PostTasksApi = async (request: PostTasksApiRequest): Promise<PostTasksApiResponse> => {
  const response = await api.post('/tasks', request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default PostTasksApi
export type { PostTasksApiRequest, PostTasksApiResponse }
