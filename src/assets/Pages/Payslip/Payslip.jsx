import React from 'react'
import { HiOutlinePrinter } from "react-icons/hi";
import { FcSettings } from "react-icons/fc";


const Payslip = () => {
  return (
    <div className='bg-white '>
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
          <p className='text-center'>PAYSLIP FOR THE MONTH OF FEB 2025</p>

</div>          
<div className='ml-4'>
  <div className='flex justify-between'>
    <FcSettings className='text-8xl ' />
    <p className='text-2xl font-bold justify-end'>PAYSLIP #49029 <br /> <span className='text-base font-normal'>Salary Month: March, 2025</span></p>
  </div>
      <p className='w-52'>Dreamguy's Technologies
    3864 Quiet Valley Lane,
    Sherman Oaks, CA, 91403</p>
    <p className='text-lg font-semibold'>John Doe</p>
    <p className='w-52'>Web Designer
    Employee ID: FT-0009
    Joining Date: 1 Jan 2023</p>
    </div>
      </div>
      <div className='flex justify-between gap-4 ml-4'>
        <div className='w-full'>
          <p>Earnings</p>
          <div className='flex justify-between  border-2'>
            <p>Basic Salary</p>
            <p>$6500</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>House Rent Allowance (H.R.A.)</p>
            <p>$55
</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>Conveyance</p>
            <p>$55</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>Other Allowance</p>
            <p>$55</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>Total Earnings</p>
            <p>$55</p>
          </div>
        </div>
        <div className='w-full'>
          <p>Deductions</p>
          <div className='flex justify-between  border-2 '>
            <p>Tax Deducted at Source (T.D.S.)</p>
            <p>$0</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>Provident Fund</p>
            <p>$0
</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>ESI</p>
            <p>$0</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>Loan</p>
            <p>$300</p>
          </div>
          <div className='flex justify-between  border-2'>
            <p>Total Deductions </p>
            <p>$59698</p>
          </div>
        </div>
        <div>

        </div>
      </div>
      <p className='ml-4 mt-2'>Net Salary: $59698 <span className='text-xs'>(Fifty nine thousand six hundred and ninety eight only.)</span></p>
    </div>
  )
}

export default Payslip
