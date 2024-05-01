import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from '../Pages/Navbar/NavBar'
import Sidebar from '../Pages/Sidebar/Sidebar'

const Root = () => {
  return (
    <div>
    <div className='max-w-7xl mx-auto font-poppins mt-6'>
      <NavBar />
      <Outlet />
    </div>
    <div>
      <Sidebar/>
    </div>
    </div>
  )
}

export default Root
