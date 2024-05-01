import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { BsChatTextFill } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";



const NavBar = () => {
  return (
    <div className='flex items-center w-full mx-auto justify-end gap-10 text-left mb-4'>
      <label className="input input-bordered w-60 flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <span className=""><HiOutlineSearch/></span>
</label>
<FaGlobe/>
<FaBell/>
<BsChatTextFill/>
<div className='p-2 rounded-full bg-slate-200'>
<FcBusinessman className='text-xl'/>

</div>   
<p className='text-xl font-bold mr-4'>Admin</p> 
</div>
  )
}

export default NavBar
