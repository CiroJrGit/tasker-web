interface PutTaskListsApiRequestData {
  title?: string
  color?: string
  deleted?: boolean
}

export interface PutTaskListsApiRequest {
  id?: string
  data: PutTaskListsApiRequestData
}
