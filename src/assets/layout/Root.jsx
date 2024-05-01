import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import NavBar from '../Pages/Navbar/NavBar';
import Sidebar, { SidebarItem } from '../Pages/Sidebar/Sidebar';
import { HandCoins } from 'lucide-react';

const Root = () => {
  return (
    <div className='flex'>
      {/* Sidebar section */}
      <div className='w-36'>
        <Sidebar>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              {/* Sidebar item with dropdown functionality */}
              <SidebarItem icon={<HandCoins size={20} />} text="Payroll" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
              <li><NavLink to='/employeeSalary'>Employee Salary</NavLink></li>
              <li><NavLink to='/payslip'>Payslip</NavLink></li>
              <li><NavLink to='/payrollItems'>Payroll Items</NavLink></li>
            </ul>
          </div>
        </Sidebar>
      </div>

      {/* Main content section */}
      <div className='flex-grow font-poppins'>
        <NavBar />
        <div className='border-b border-gray-200 w-full'></div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
