import { ReactNode, Dispatch, SetStateAction } from 'react'

export interface TaskListProps {
  id: string
  userId: string
  title: string
  createdAt: Date
  color: string
  deleted: boolean
}

export interface TaskProps {
  id: string
  taskListId: string
  desc: string
  completed: boolean
}

export interface Note {
  id: string
  title: string
  content: string
  // createdAt: Date
  color: string
  deleted: boolean
}

export interface BackgroundProps {
  defaultBackgrounds: string[]
  defaultSystemCard: string | undefined
  selectedBackground: string | undefined
}

export interface PagesProviderProps {
  children: ReactNode
}

export interface PagesContextProps {
  taskLists: TaskListProps[]
  setTaskLists: Dispatch<SetStateAction<TaskListProps[]>>
  loadingTaskLists: boolean
  setLoadingTaskLists: Dispatch<SetStateAction<boolean>>
  loadTaskLists: () => Promise<void>
  handleGetTaskList: (id: string) => Promise<TaskListProps>
  handleCreateTaskList: (title: string, color: string) => void
  handleDeleteTaskList: (id: string) => void
  handleEditTaskList: (
    id: string | undefined,
    title: string | undefined,
    color: string | undefined,
    deleted: boolean | undefined,
  ) => Promise<void>

  tasks: TaskProps[]
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
  loadingTasks: boolean
  setLoadingTasks: Dispatch<SetStateAction<boolean>>
  loadTasks: (listId: string) => Promise<void>
  handleCreateTask: (desc: string, taskListId: string) => Promise<void>
  handleDeleteTask: (id: string, taskListId: string) => void
  handleEditTask: (id: string, desc: string, taskListId: string) => Promise<void>
  handleToggleTask: (taskId: string, completed: boolean, listId: string) => Promise<void>

  notes: Note[]
  setNotes: Dispatch<SetStateAction<Note[]>>
  loadingNotes: boolean
  setLoadingNotes: Dispatch<SetStateAction<boolean>>
  loadNotes: () => Promise<void>
  handleGetNote: (id: string) => Promise<Note>
  handleCreateNote: (title: string, color: string) => void
  handleDeleteNote: (id: string) => void
  handleEditNote: (
    id: string | undefined,
    title: string | undefined,
    // content: string | undefined,
    color: string | undefined,
    deleted: boolean | undefined,
  ) => void

  userBackground: string | undefined
  setUserBackground: Dispatch<SetStateAction<string | undefined>>
  backgrounds: BackgroundProps
  setBackgrounds: Dispatch<SetStateAction<BackgroundProps>>
  loadBackgrounds: () => Promise<void>
  handleBackgroundUser: (background: string) => Promise<void>
  handleBackgroundUpload: (file: File) => Promise<string | undefined>
}
