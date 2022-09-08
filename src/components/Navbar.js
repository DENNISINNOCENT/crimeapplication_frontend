import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {

  return (
    <nav className='navbar'>
       
       
<div className='links'>
 
    <div>
        <NavLink
        to="/"
        className="navlink"
        
        >
        CRIMELIST
      </NavLink>
      </div>
      <div>
        <NavLink
        to="/reportcrime"
        className="navlink"
        
      >
        REPORTCRIME</NavLink>
      </div>
       
     
    </div>    
   
    
   </nav>
    
  )
}

export default Navbar