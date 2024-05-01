import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { HiDotsVertical } from "react-icons/hi";
import ReactDatePicker from 'react-datepicker';
import Datepicker from "react-tailwindcss-datepicker";


const EmployeeSalary = () => {
  const employee = useLoaderData();
  const [value, setValue] = useState({ 
startDate: new Date(), 
endDate: new Date().setMonth(11) 
}); 
const handleValueChange = (newValue) => {
console.log("newValue:", newValue); 
setValue(newValue); 
} 

  return (
    <div className='mt-6  '>
    <div className='mx-5 flex justify-between'>
      <input type="text" placeholder="Type here" className="input input-md w-full max-w-xs select-bordered" />
      <select className="select input input-md w-full max-w-xs select-bordered">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Employee</option>
  <option>Manager</option>
</select>
      <select className="  input input-md w-full max-w-xs select-bordered">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Cash</option>
  <option>Cheque</option>

</select>
<div className=' w-full max-w-xs select-bordered'>
  <Datepicker
value={value} 
onChange={handleValueChange} 
/> 
</div>
    </div>
      <div className="lg:overflow-x-auto  ">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className='  '>
        <th>
          No.
        </th>
        <th className=''>Name</th>
        <th className=''>Employee Id</th>
        <th className=''>Email</th>
        <th className=''>Join Date</th>
        <th className=''>Role</th>
        <th className=''>Salary</th>
        <th className=''>Payslip</th>
        <th >Action</th>
      </tr>
    </thead>
    {
          employee.map(p => <tbody key={p.id}>
      {/* row 1 */}
      <tr>
        <th>
          {p.id}
        </th>
        <td>
          <div className="flex items-center ">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={p.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{p.name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {p.employeeId}
          <br/>
          
        </td>
        <td>{p.email}</td>
        <td>{p.joinDate}</td>
        <td>{p.role}</td>
        <td>{p.salary}</td>
        <td><button className="btn btn-ghost btn-xs">Generate Slip</button></td>
        <td><HiDotsVertical/></td>
        <th>
          
        </th>
      </tr>
      
    </tbody>)
        }
    
    
    
  </table>
</div>
    </div>
  )
}

export default EmployeeSalary
