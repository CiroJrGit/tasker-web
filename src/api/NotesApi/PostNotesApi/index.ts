import { api } from '../../_core/axios'

import { PostNotesApiRequest } from './interfaces/request'
import { PostNotesApiResponse } from './interfaces/response'

const PostNotesApi = async (request: PostNotesApiRequest): Promise<PostNotesApiResponse> => {
  const response = await api.post('/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: request,
  })

  return response.data
}

export default PostNotesApi
export type { PostNotesApiRequest, PostNotesApiResponse }
