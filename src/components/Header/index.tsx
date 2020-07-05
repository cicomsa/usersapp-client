import React from 'react'
import Link from '../Link'

const Header = () => (
  <nav>
    <ul>
      <Link path="/" title="Home" />
      <Link path="/pages/1" title="First Page" />
      <Link path="/pages/2" title="Second Page" />
      <Link path="/pages/3" title="Third Page" />
    </ul>
  </nav>
)

export default Header
