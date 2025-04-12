export interface TaskList {
  id: string
  userId: string
  title: string
  createdAt: Date
  color: string
  deleted: boolean
}

export interface Task {
  id: string
  taskListId: string
  desc: string
  completed: boolean
}
