import React from 'react'
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='flex flex-row flex-wrap  justify-between p-8'>
        <Link to={"/home"} className='hover:bg-slate-200 hover:rounded-full p-3'>
          <IoPerson className ='text-gray-600 h-6 w-6'/>
        </Link>
         <Link to={'/home'} className='hover:bg-slate-200 hover:rounded-full  p-3'>
            <FaFireFlameCurved className ='text-red-500 h-6 w-6'/>
         </Link>
        <Link to={"/home"} className='hover:bg-slate-200 hover:rounded-full  p-3'>
           <FaCopy  className='text-black h-6 w-6'/>
        </Link>
    </div>
  )
}

export default Header
