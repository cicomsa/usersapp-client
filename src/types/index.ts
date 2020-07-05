import { IDataContent } from '../interfaces'

export type TParams = { id: string }

export type TUser = {
  id: number,
  name: string,
  email: string,
  location: string,
  online: boolean,
  avatar: string
}

export type TPageQueryResponse = {
  page: IDataContent,
  loading: string,
  error: string
}

export type TPageQueryVariables = {
  param: string;
}
