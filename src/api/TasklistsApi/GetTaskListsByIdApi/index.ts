import { api } from '../../_core/axios'
import { GetTaskListsByIdApiRequest } from './interfaces/request'
import { GetTaskListsByIdApiResponse } from './interfaces/response'

const GetTaskListsByIdApi = async (request: GetTaskListsByIdApiRequest): Promise<GetTaskListsByIdApiResponse> => {
  const response = await api.get(`/tasklists/${request.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default GetTaskListsByIdApi
export type { GetTaskListsByIdApiRequest, GetTaskListsByIdApiResponse }
