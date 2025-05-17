import { useState, createContext, useContext } from 'react'
import { api } from '../api/_core/axios'

import { TaskList, Task, Note, Background, PagesProviderProps, PagesContextType } from '../types/pagesTypes'

export const PagesContext = createContext<PagesContextType>({} as PagesContextType)

const PagesProvider = ({ children }: PagesProviderProps) => {
  const [taskLists, setTaskLists] = useState<TaskList[]>([])
  const [loadingTaskLists, setLoadingTaskLists] = useState(true)

  const [tasks, setTasks] = useState<Task[]>([])
  const [loadingTasks, setLoadingTasks] = useState(true)

  const [notes, setNotes] = useState<Note[]>([])
  const [loadingNotes, setLoadingNotes] = useState(true)

  // states background selecionado
  const [userBackground, setUserBackground] = useState<string | undefined>()
  // const [loadingUserBackground, setLoadingUserBackground] = useState(true)

  // states backgrounds
  const [backgrounds, setBackgrounds] = useState<Background>({
    defaultBackgrounds: [],
    defaultSystemCard: undefined,
    selectedBackground: undefined,
  })

  // carregar backgrounds
  const loadBackgrounds = async () => {
    // const authorization = setAuthorization()

    const bgResponse = await api.get('/backgrounds')
    setBackgrounds(bgResponse.data)
  }

  // alterar background do usuario
  const handleBackgroundUser = async (image: string) => {
    // const authorization = setAuthorization()

    await api.put('/background', { image })
  }

  // upload background do usuario
  const handleBackgroundUpload = async (file: File) => {
    // const authorization = setAuthorization()
    if (!file) return

    // setLoadingNotes(true)
    const formData = new FormData()
    formData.append('image', file)

    const response = await api.post('/background', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.toString()
  }

  return (
    <PagesContext.Provider
      value={{
        taskLists,
        setTaskLists,
        loadingTaskLists,
        setLoadingTaskLists,

        tasks,
        loadingTasks,
        setTasks,
        setLoadingTasks,

        notes,
        setNotes,
        loadingNotes,
        setLoadingNotes,

        userBackground,
        setUserBackground,
        backgrounds,
        setBackgrounds,
        loadBackgrounds,
        handleBackgroundUser,
        handleBackgroundUpload,
      }}
    >
      {children}
    </PagesContext.Provider>
  )
}

export const usePagesContext = () => {
  const context = useContext(PagesContext)
  if (!context) {
    throw new Error('usePages must be used within a PagesProvider')
  }
  return context
}

export default PagesProvider
