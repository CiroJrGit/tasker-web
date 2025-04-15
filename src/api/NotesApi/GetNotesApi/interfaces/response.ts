interface NotesItem {
  id: string
  title: string
  content: string
  color: string
  deleted: boolean
}

export interface GetNotesApiResponse {
  notes: NotesItem[]
}
