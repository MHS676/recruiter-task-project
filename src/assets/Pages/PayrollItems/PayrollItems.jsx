import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiDotsVertical } from "react-icons/hi";

const PayrollItems = () => {
 

  return (
    <div className='mt-4 ml-4'>
       <div className='mt-4 ml-4'>
      <div role="tablist" className="tabs tabs-bordered w-96 ">
  <a role="tab" className="tab">Addition</a>
  <a role="tab" className="tab tab-active">Overtime</a>
  <a role="tab" className="tab">Deductions</a>
</div>
    </div>
<div className='text-end'>
      <button className='btn btn-error text-white mr-4' >Add Addition</button>

</div>      <div className='mt-10'>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Default/Unit Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Leave balance amount</td>
        <td>Monthly remuneration	</td>
        <td>$5</td>
        <td><HiDotsVertical/></td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Arrears of salary	</td>
        <td>Additional remuneration	</td>
        <td>$8</td>
        <td><HiDotsVertical/></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Gratuity</td>
        <td>Monthly remuneration</td>
        <td>$20</td>
        <td><HiDotsVertical/></td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default PayrollItems;

