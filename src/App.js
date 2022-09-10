import React  from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

import ReportCrime from "./components/ReportCrime"



function App() {
  
 
  


  return (
    <>
  <div className='app_cointainer'>
<Navbar/>
<div className='path_container'>
  <Routes>
    <Route exact path ='/crimelist' element={<CrimeList/>}/>
    <Route exact path ='/reportcrime' element={<ReportCrime/>}/>
  </Routes>

</div>
  </div>
    
    </>
      
    
  )
}

export default App