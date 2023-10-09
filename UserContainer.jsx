import React from 'react'
import { NavbarContext } from './Navbar'
import { useContext,useReducer } from 'react'

function UserContainer() {
  const {user,logout}=useContext(NavbarContext);
  
  return (
    <>
    <h2>hello dear {user?.Name}</h2>
    <button onClick={logout}>log me out</button>

    </>
    
  )
}

export default UserContainer