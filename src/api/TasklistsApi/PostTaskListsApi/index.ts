import { api } from '../../_core/axios'
import { PostTaskListsApiRequest } from './interfaces/request'
import { PostTaskListsApiResponse } from './interfaces/response'

const PostTaskListsApi = async (request: PostTaskListsApiRequest): Promise<PostTaskListsApiResponse> => {
  const response = await api.post('/tasklists', request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default PostTaskListsApi
export type { PostTaskListsApiRequest, PostTaskListsApiResponse }
