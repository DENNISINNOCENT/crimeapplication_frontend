import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
 <div className='links'>
  <div>
<NavLink
to ="/crimelist"
className="navlink"
>
  HOME
</NavLink>
  </div>
  <div>
    <NavLink
to ="/reportcrime"
className="navlink"
>
  REPORT CRIME
</NavLink>
  </div>
 </div>
    </nav>

  )
}

export default Navbar