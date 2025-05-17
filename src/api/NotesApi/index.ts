import GetNotesApi from './GetNotesApi'
import GetNotesByIdApi, { GetNotesByIdApiRequest } from './GetNotesByIdApi'
import PostNotesApi, { PostNotesApiRequest } from './PostNotesApi'
import PutNotesApi, { PutNotesApiRequest } from './PutNotesApi'
import DeleteNotesApi, { DeleteNotesApiRequest } from './DeleteNotesApi'

const NotesApi = {
  getNotes: () => GetNotesApi(),
  getNoteById: (request: GetNotesByIdApiRequest) => GetNotesByIdApi(request),
  postNotes: (request: PostNotesApiRequest) => PostNotesApi(request),
  putNotes: (request: PutNotesApiRequest) => PutNotesApi(request),
  deleteNotes: (request: DeleteNotesApiRequest) => DeleteNotesApi(request),
}

export default NotesApi
