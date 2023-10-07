import React from 'react'
import UserContainer from './UserContainer'

function NavLink() {
  return (
    <div>
      <div><ul>
      <li>home</li>
      <li>about</li>
      <li>Contact</li>
      </ul></div>
      {<UserContainer/>}
    </div>
  )
}

export default NavLink