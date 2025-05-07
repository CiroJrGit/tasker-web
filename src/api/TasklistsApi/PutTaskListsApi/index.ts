import { api } from '../../_core/axios'
import { PutTaskListsApiRequest } from './interfaces/request'
import { PutTaskListsApiResponse } from './interfaces/response'

const PutTaskListsApi = async (request: PutTaskListsApiRequest): Promise<PutTaskListsApiResponse> => {
  const response = await api.put(`/tasklists/${request.id}`, request.data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default PutTaskListsApi
export type { PutTaskListsApiRequest, PutTaskListsApiResponse }
