import { TUser } from '../types'

export interface IData {
  data: IDataContent[]
}

export interface IDataContent {
  id: number,
  title: string,
  description: string,
  users: TUser[]
}

export interface IUsers {
  users: TUser[]
}

export interface IUser {
  user: TUser;
  keys: string[]
}

export interface ICell {
  user: TUser,
  id: string,
  avatar: boolean,
  email: boolean,
  online: boolean
}

export interface ILink {
  title: string,
  path: string
}
