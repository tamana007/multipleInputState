import React, { useState } from 'react'
import NavLink from './NavLink'

function Navbar() {

  const[value,setValue]=useState({Name:"Ali"});

  function logout(){
    setValue('');
  }
  return (
    
    <div>
      <NavLink/>
      <button onClick={logout}>click</button>
      <h4>{value.Name}</h4>
    </div>
  )
}

export default Navbar