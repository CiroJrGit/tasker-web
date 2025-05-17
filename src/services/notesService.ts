import NotesApi from '../api/NotesApi'
import { GetNotesApiResponse } from '../api/NotesApi/GetNotesApi'
import { GetNotesByIdApiRequest, GetNotesByIdApiResponse } from '../api/NotesApi/GetNotesByIdApi'
import { PostNotesApiRequest, PostNotesApiResponse } from '../api/NotesApi/PostNotesApi'
import { PutNotesApiRequest, PutNotesApiResponse } from '../api/NotesApi/PutNotesApi'
import { DeleteNotesApiRequest, DeleteNotesApiResponse } from '../api/NotesApi/DeleteNotesApi'

export const notesService = {
  fetchNotes: async (): Promise<GetNotesApiResponse> => {
    const response = await NotesApi.getNotes()
    return response
  },

  fetchNoteById: async (request: GetNotesByIdApiRequest): Promise<GetNotesByIdApiResponse> => {
    const response = await NotesApi.getNoteById(request)
    return response
  },

  createNote: async (request: PostNotesApiRequest): Promise<PostNotesApiResponse> => {
    const response = await NotesApi.postNotes(request)
    return response
  },

  updateNote: async (request: PutNotesApiRequest): Promise<PutNotesApiResponse> => {
    const response = await NotesApi.putNotes(request)
    return response
  },

  deleteNote: async (request: DeleteNotesApiRequest): Promise<DeleteNotesApiResponse> => {
    const response = await NotesApi.deleteNotes(request)
    return response
  },
}
