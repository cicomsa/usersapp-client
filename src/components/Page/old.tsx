import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Users from '../Users'
import { IDataContent, IData } from '../../interfaces'
import { TParams, TUser } from '../../types'
const page = require('../data.json')

const Page = ({ match }: RouteComponentProps<TParams>) => {
  const { id }: TParams = match.params
  const { data }: IData = page

  const content: IDataContent | undefined = data.find(item => item.id === Number(id))

  if (!content) {
    return <p>Error retreiving data for this page</p>
  }

  let title: string = content ? content.title : ''
  let description: string = content ? content.description : ''
  let users: TUser[] | any[] = content ? content.users : []

  return (
    <>
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <Users users={users} />
    </>
  )
}