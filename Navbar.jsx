import React, { useState,Context, useContext, createContext } from 'react'

import NavLink from './NavLink'

export const NavbarContext=createContext();

function Navbar() {

 

  const[user,setUser]=useState({Name:"Ali"});

  function logout(){
    setUser('');
  }
 
  return (
    
    <div>
      <NavbarContext.Provider value={{user,logout}}>
      <nav>
        <h5>Context API</h5>
        <NavLink/>
      </nav>
      
      <button onClick={logout}>click</button>
      <h4>{user.Name}</h4>

      </NavbarContext.Provider>
     
    </div>
  )
}

export default Navbar