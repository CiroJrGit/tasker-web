import { api } from '@/api/_core/axios'
import { PutTasksApiRequest } from './interfaces/request'
import { PutTasksApiResponse } from './interfaces/response'

const PutTasksApi = async (request: PutTasksApiRequest): Promise<PutTasksApiResponse> => {
  const response = await api.put(`/tasks/${request.id}`, request.data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default PutTasksApi
export type { PutTasksApiRequest, PutTasksApiResponse }
