import { api } from '@/api/_core/axios'
import { PutTasksToggleApiRequest } from './interfaces/request'
import { PutTasksToggleApiResponse } from './interfaces/response'

const PutTasksToggleApi = async (request: PutTasksToggleApiRequest): Promise<PutTasksToggleApiResponse> => {
  const response = await api.put(`/tasks/${request.id}/toggle`, request.data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export default PutTasksToggleApi
export type { PutTasksToggleApiRequest, PutTasksToggleApiResponse }
