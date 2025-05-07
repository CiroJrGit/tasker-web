interface TaskListItem {
  id: string
  userId: string
  title: string
  createdAt: Date
  color: string
  deleted: boolean
}

export type GetTaskListsApiResponse = Array<TaskListItem>
