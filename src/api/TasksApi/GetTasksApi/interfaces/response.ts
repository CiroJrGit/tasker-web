export interface TaskItem {
  id: string
  taskListId: string
  desc: string
  createdAt: Date
  completed: boolean
}

export type GetTasksApiResponse = Array<TaskItem>
