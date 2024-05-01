import React from 'react'
import {Outlet, NavLink} from "react-router-dom"
import NavBar from '../Pages/Navbar/NavBar'
import Sidebar, { SidebarItem } from '../Pages/Sidebar/Sidebar'
import { HandCoins } from 'lucide-react'

const Root = () => {
  return (
    <div>
    <div className='max-w-7xl mx-auto font-poppins mt-6'>
      <NavBar />
      <Outlet />
    </div>
    <div className='w-full flex'>
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
    </div>
    </div>
  )
}

export default Root
