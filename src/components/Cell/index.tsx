import React from 'react'
import CheckSVG from '../../svgs/CheckSVG'
import { hasKey } from '../../helpers'
import { ICell } from '../../interfaces'
import './styles.css'

const Cell = ({ user, id, avatar, online, email }: ICell) => {
  return (
    <td className={`user-content ${id === 'online' ? 'user-online' : ''}`} key={id}>
      {avatar && <img className="user-img" src={user.avatar} alt="avatar" />}
      {online && <CheckSVG />}
      {email && hasKey(user, id) && (
        <a href={`mailto:${user[id]}`}>{user[id]}</a>
      )}
      {!email && hasKey(user, id) && user[id]}
    </td>
  )
}

export default Cell
