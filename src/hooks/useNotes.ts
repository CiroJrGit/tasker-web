import { useNavigate } from 'react-router-dom'
import { usePagesContext } from '../contexts/pagesContext'
import { notesService } from '../services/notesService'

const useNotes = () => {
  const navigate = useNavigate()
  const { notes, setNotes, loadingNotes, setLoadingNotes } = usePagesContext()

  async function loadNotes() {
    setLoadingNotes(true)
    const result = await notesService.fetchNotes()

    if (result) {
      setNotes(result)
    }

    setLoadingNotes(false)
    return result
  }

  async function handleGetNote(id: string) {
    const result = await notesService.fetchNoteById({ id })
    const note = result

    return note
  }

  async function handleCreateNote(title: string, color: string) {
    const result = await notesService.createNote({ title, color })
    const newNoteId = result

    loadNotes()
    navigate(`/notes/${newNoteId}`)
  }

  async function handleDeleteNote(id: string) {
    await notesService.deleteNote({ id })

    loadNotes()
  }

  async function handleEditNote(id: string, title: string, color: string, deleted: boolean) {
    const requestParams = { id, data: { title, color, deleted } }
    await notesService.updateNote(requestParams)

    loadNotes()
  }

  return {
    notes,
    setNotes,
    loadingNotes,
    setLoadingNotes,
    loadNotes,
    handleGetNote,
    handleCreateNote,
    handleDeleteNote,
    handleEditNote,
  }
}

export { useNotes }
