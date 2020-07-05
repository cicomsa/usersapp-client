import React from 'react'
import { Link } from 'react-router-dom'
import { ILink } from '../../interfaces'

const LinkComponent = ({ title, path }: ILink) => (
  <li>
    <Link to={path}>{title}</Link>
  </li>
)

export default LinkComponent