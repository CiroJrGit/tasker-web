import DeleteTasksAllApi, { DeleteTasksAllApiRequest } from './DeleteTasksAllApi'
import DeleteTasksApi, { DeleteTasksApiRequest } from './DeleteTasksApi'
import GetTasksApi, { GetTasksApiRequest } from './GetTasksApi'
import PostTasksApi, { PostTasksApiRequest } from './PostTasksApi'
import PutTasksApi, { PutTasksApiRequest } from './PutTasksApi'
import PutTasksToggleApi, { PutTasksToggleApiRequest } from './PutTasksToggleApi'

const TasksApi = {
  getTasks: async (request: GetTasksApiRequest) => GetTasksApi(request),
  postTasks: async (request: PostTasksApiRequest) => PostTasksApi(request),
  putTasks: async (request: PutTasksApiRequest) => PutTasksApi(request),
  putTasksToggle: async (request: PutTasksToggleApiRequest) => PutTasksToggleApi(request),
  deleteTasks: async (request: DeleteTasksApiRequest) => DeleteTasksApi(request),
  deleteTasksAll: async (request: DeleteTasksAllApiRequest) => DeleteTasksAllApi(request),
}

export default TasksApi
