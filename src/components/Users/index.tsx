import React from 'react'
import User from '../User'
import { IUsers } from '../../interfaces'
import './styles.css'

const Users = ({ users }: IUsers) => {
  const usersData = users.map(user => {
    const keys: string[] = Object.keys(user)

    return (
      <tr key={user.id}>
        <User user={user} keys={keys} />
      </tr>
    )
  })

  return <table className="users-table">
    <thead>
      <tr>
        <th className="table-header">Name</th>
        <th className="table-header">Email</th>
        <th className="table-header">Location</th>
        <th className="table-header">Online</th>
      </tr>
    </thead>
    <tbody>
      {usersData}
    </tbody>
  </table>
}

export default Users
