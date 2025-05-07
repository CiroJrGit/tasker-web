import { api } from '../../_core/axios'
import { GetTaskListsApiRequest } from './interfaces/request'
import { GetTaskListsApiResponse } from './interfaces/response'

const GetTaskListsApi = async (): Promise<GetTaskListsApiResponse> => {
  const response = await api.get('/tasklists', {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default GetTaskListsApi
export type { GetTaskListsApiRequest, GetTaskListsApiResponse }
