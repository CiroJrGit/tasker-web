import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { setAuthorization } from '../lib/authorization'

import {
  TaskListProps,
  TaskProps,
  NoteProps,
  // BackgroundProps,
  PagesProviderProps,
  PagesContextProps,
} from '../types/pagesProps'

export const PagesContext = createContext<PagesContextProps>(
  {} as PagesContextProps,
)

const PagesProvider = ({ children }: PagesProviderProps) => {
  // states lista de tarefas
  const [taskLists, setTaskLists] = useState<TaskListProps[]>([])
  const [loadingTaskLists, setLoadingTaskLists] = useState(true)

  // states tarefas
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [loadingTasks, setLoadingTasks] = useState(true)

  // states anotacoes
  const [notes, setNotes] = useState<NoteProps[]>([])
  const [loadingNotes, setLoadingNotes] = useState(true)

  // states backgrounds
  // const [backgrds, setBackgrds] = useState<BackgroundProps[]>([]);

  const navigate = useNavigate()

  // carregar listas de tarefas
  async function loadTaskLists() {
    const authorization = setAuthorization()

    const taskListResponse = await api.get('/tasklists', authorization)
    setTaskLists(taskListResponse.data)
    setLoadingTaskLists(false)
  }

  // obter uma lista de tarefas
  async function handleGetTaskList(id: string) {
    const authorization = setAuthorization()

    const taskListResponse = await api.get(`/tasklists/${id}`, authorization)
    const taskList: TaskListProps = taskListResponse.data

    loadTasks(taskList.id)
    return taskList
  }

  // criar lista de tarefas
  async function handleCreateTaskList(title: string, color: string) {
    const authorization = setAuthorization()

    const newTaskList = await api.post(
      '/tasklists',
      { title, color },
      authorization,
    )

    const newTaskListId = newTaskList.data

    loadTaskLists()
    navigate(`/tasklists/${newTaskListId}`)
  }

  // deletar lista de tarefas
  async function handleDeleteTaskList(id: string) {
    const authorization = setAuthorization()

    await api.delete(`/tasks/${id}/all`, authorization)
    await api.delete(`/tasklists/${id}`, authorization)

    loadTaskLists()
  }

  // editar lista de tarefas
  async function handleEditTaskList(
    id: string | undefined,
    title: string | undefined,
    color: string | undefined,
    deleted: boolean | undefined,
  ) {
    const authorization = setAuthorization()

    await api.put(`/tasklists/${id}`, { title, color, deleted }, authorization)

    loadTaskLists()
  }

  // carregar tarefas
  async function loadTasks(listId: string) {
    const authorization = setAuthorization()

    const taskResponse = await api.get(`/tasks/${listId}`, authorization)

    setTasks(taskResponse.data)
    setLoadingTasks(false)
  }

  // criar tarefa
  async function handleCreateTask(desc: string, taskListId: string) {
    const authorization = setAuthorization()

    await api.post(`/tasks`, { desc, taskListId }, authorization)

    loadTasks(taskListId)
  }

  // deletar tarefa
  async function handleDeleteTask(id: string, taskListId: string) {
    const authorization = setAuthorization()

    await api.delete(`/tasks/${id}`, authorization)

    loadTasks(taskListId)
  }

  // editar tarefa
  async function handleEditTask(id: string, desc: string, taskListId: string) {
    const authorization = setAuthorization()

    await api.put(`/tasks/${id}`, { desc }, authorization)

    loadTasks(taskListId)
  }

  // marcar/desmarcar tarefa como concluida
  async function handleToggleTask(
    taskId: string,
    completed: boolean,
    listId: string,
  ) {
    const authorization = setAuthorization()

    await api.put(`/tasks/${taskId}/toggle`, { completed }, authorization)

    loadTasks(listId)
  }

  // carregar anotacoes
  async function loadNotes() {
    const authorization = setAuthorization()

    const noteResponse = await api.get('/notes', authorization)
    setNotes(noteResponse.data)
    setLoadingNotes(false)
  }

  // obter uma anotacao
  async function handleGetNote(id: string) {
    const authorization = setAuthorization()

    const noteResponse = await api.get(`/notes/${id}`, authorization)
    const note: NoteProps = noteResponse.data

    return note
  }

  // criar anotacao
  async function handleCreateNote(title: string, color: string) {
    const authorization = setAuthorization()

    const newNote = await api.post('/notes', { title, color }, authorization)
    const newNoteId = newNote.data

    loadNotes()
    navigate(`/notes/${newNoteId}`)
  }

  // deletar anotacao
  async function handleDeleteNote(id: string) {
    const authorization = setAuthorization()

    await api.delete(`/notes/${id}`, authorization)

    loadNotes()
  }

  // editar anotacao
  async function handleEditNote(
    id: string | undefined,
    title: string | undefined,
    // content: string | undefined,
    color: string | undefined,
    deleted: boolean | undefined,
  ) {
    const authorization = setAuthorization()

    await api.put(`/notes/${id}`, { title, color, deleted }, authorization)

    loadNotes()
  }

  // TO-DO: backgrounds
  // carregar bacgrounds
  // async function loadBackgrpunds() {
  //   const authorization = setAuthorization();

  //   const bgResponse = await api.get('/backgrounds', authorization);
  //   setBackgrds(bgResponse.data);
  // }

  return (
    <PagesContext.Provider
      value={{
        taskLists,
        setTaskLists,
        loadingTaskLists,
        setLoadingTaskLists,
        loadTaskLists,
        handleGetTaskList,
        handleCreateTaskList,
        handleDeleteTaskList,
        handleEditTaskList,

        tasks,
        loadingTasks,
        setTasks,
        setLoadingTasks,
        loadTasks,
        handleCreateTask,
        handleDeleteTask,
        handleEditTask,
        handleToggleTask,

        notes,
        setNotes,
        loadingNotes,
        setLoadingNotes,
        loadNotes,
        handleGetNote,
        handleCreateNote,
        handleDeleteNote,
        handleEditNote,

        // backgrds,
        // setBackgrds,
        // loadBackgrpunds,
      }}
    >
      {children}
    </PagesContext.Provider>
  )
}

export default PagesProvider
