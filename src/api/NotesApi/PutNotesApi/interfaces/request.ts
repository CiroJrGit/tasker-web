interface PutNotesApiRequestData {
  title?: string
  color?: string
  deleted?: boolean
}

export interface PutNotesApiRequest {
  id?: string
  data: PutNotesApiRequestData
}
