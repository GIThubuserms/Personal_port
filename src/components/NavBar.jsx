import React, {useState } from 'react'
import {Navlinks} from '../index.js'
import Murtazadeep from'../assets/Murtazadeep.png'
import { FaBars } from 'react-icons/fa';
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

function NavBar() {
  
  const[ismenuopen,setismenuopen]=useState(false) 
  const handlemenu=()=>{   
    setismenuopen(!ismenuopen)
}
  return (
    <nav className='w-full  backdrop-blur-lg rounded-xl mb-5 lg:mb-0' >
        <div className=' flex h-[80px] items-center justify-between  '>
            <div className=' ml-5 md:ml-9'>    
                <img  
                src={Murtazadeep}  
                className='h-[70px]' 
                alt="murtazalogo" />  
            </div>

            <ul className='text-black items-center justify-center gap-x-3 md:gap-x-4 w-full hidden md:flex text-sm md:text-md font-bold'>
          {Navlinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`hover:text-blue-800 ${link?.active ? "text-blue-700" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
    
          {ismenuopen ?<MdOutlineCancel onClick={handlemenu} size={25} className='mr-6 md:hidden' />: <FaBars onClick={handlemenu} size={25} className='mr-6 md:hidden'/>}
        
        </div>

        {ismenuopen && <ul className= {` text-black items-center justify-center   w-full md:hidden flex-col text-md font-bold backdrop-blur-lg  px-5 space-y-4 `} >
                {Navlinks.map((li)=> 
                <li key={li.id}
                className={`hover:text-blue-800  animate-ping-once  border-b-2 border-slate-200  p-2 ${li?.active?"text-blue-700":null}`} 
                >
                <Link  
                to={li.path}
                >
                {li.name}
                </Link>
                 </li>
                )}
            </ul>}
      
    </nav>
  )
}

export default NavBar