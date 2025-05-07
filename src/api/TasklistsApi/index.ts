import GetTaskListsApi from './GetTaskListsApi'
import GetTaskListsByIdApi, { GetTaskListsByIdApiRequest } from './GetTaskListsByIdApi'
import PostTaskListsApi, { PostTaskListsApiRequest } from './PostTaskListsApi'
import PutTaskListsApi, { PutTaskListsApiRequest } from './PutTaskListsApi'
import DeleteTaskListsApi, { DeleteTaskListsApiRequest } from './DeleteTaskListApi'

const TaskListsApi = {
  getTaskLists: () => GetTaskListsApi(),
  getTaskListssById: (request: GetTaskListsByIdApiRequest) => GetTaskListsByIdApi(request),
  postTaskLists: (request: PostTaskListsApiRequest) => PostTaskListsApi(request),
  putTaskLists: (request: PutTaskListsApiRequest) => PutTaskListsApi(request),
  deleteTaskLists: (request: DeleteTaskListsApiRequest) => DeleteTaskListsApi(request),
}

export default TaskListsApi
