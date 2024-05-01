import React from 'react'
import {Outlet, NavLink} from "react-router-dom"
import NavBar from '../Pages/Navbar/NavBar'
import Sidebar, { SidebarItem } from '../Pages/Sidebar/Sidebar'
import { HandCoins } from 'lucide-react'

const Root = () => {
  return (
    <div className=' flex'>
     <div className='w-36 flex'>
      <Sidebar>
         <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1"><SidebarItem icon={<HandCoins size={20} />} text={"payrol"} /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2  bg-base-100 rounded-box w-52">
    <li> <NavLink to={'/employeeSalary'}>EmployeeSalary</NavLink> </li>
    <li><NavLink to={'/payslip'}>Payslip</NavLink></li>
    <li><NavLink to={'/payrollItems'}>PayrollItems</NavLink></li>
  </ul>
</div>
      </Sidebar>
      <div className=' font-poppins mt-6'>
      <NavBar />
      <div className='border border-b-0 lg:w-screen'></div>
      <Outlet />
    </div>
    </div>
    
   
    </div>
  )
}

export default Root
