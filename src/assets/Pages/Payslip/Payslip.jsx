import React from 'react'
import { HiOutlinePrinter } from "react-icons/hi";
import { FcSettings } from "react-icons/fc";


const Payslip = () => {
  return (
    <div className='bg-gray-100 h-screen '>
    <div className='flex justify-between'>
      <div className=''>
      <p className='text-4xl pt-4 pl-4 mb-2'>Payslip</p>
      <p className='text-base pl-4'>Dashboard /Payslip</p>
    </div>
      <div className="join pt-4 pr-4">
        <button className="btn join-item bg-white">CSV</button>
        <button className="btn join-item bg-white">PDF</button>
        <button className="btn join-item bg-white"><HiOutlinePrinter/>Print</button>
      </div>
    </div>
      <div className='bg-white '>
<div>
          <p>PAYSLIP FOR THE MONTH OF FEB 2025</p>

</div>          
<div>
  <FcSettings className='text-8xl'/>
  <p className='w-52'>Dreamguy's Technologies
3864 Quiet Valley Lane,
Sherman Oaks, CA, 91403</p>
</div>
      </div>
    </div>
  )
}

export default Payslip
