import { ReactNode, Dispatch, SetStateAction } from 'react'

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
  createdAt: Date
  completed: boolean
}

export interface Note {
  id: string
  title: string
  content: string
  color: string
  deleted: boolean
}

export interface Background {
  defaultBackgrounds: string[]
  defaultSystemCard: string | undefined
  selectedBackground: string | undefined
}

export interface PagesProviderProps {
  children: ReactNode
}

export interface PagesContextType {
  taskLists: TaskList[]
  setTaskLists: Dispatch<SetStateAction<TaskList[]>>
  loadingTaskLists: boolean
  setLoadingTaskLists: Dispatch<SetStateAction<boolean>>

  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
  loadingTasks: boolean
  setLoadingTasks: Dispatch<SetStateAction<boolean>>

  notes: Note[]
  setNotes: Dispatch<SetStateAction<Note[]>>
  loadingNotes: boolean
  setLoadingNotes: Dispatch<SetStateAction<boolean>>

  userBackground: string | undefined
  setUserBackground: Dispatch<SetStateAction<string | undefined>>
  backgrounds: Background
  setBackgrounds: Dispatch<SetStateAction<Background>>
  loadBackgrounds: () => Promise<void>
  handleBackgroundUser: (background: string) => Promise<void>
  handleBackgroundUpload: (file: File) => Promise<string | undefined>
}
