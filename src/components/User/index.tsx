import React from 'react'
import Cell from '../Cell'
import { IUser } from '../../interfaces'

const User = ({ user, keys }: IUser) => {
  const userData = keys
    .filter(key => key !== 'avatar' && key !== 'id')
    .map(key => (
      <Cell
        id={key}
        avatar={key === 'name'}
        email={key === 'email'}
        online={key === 'online' && user.online}
        user={user}
        key={key}
      />
    ))

  return <>{userData}</>
}

export default User
