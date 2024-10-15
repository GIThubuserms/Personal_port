import React, { useEffect, useState } from 'react'
import Navlinks from '..'
import Murtazadeep from'../assets/Murtazadeep.png'
import { FaBars } from 'react-icons/fa';
import { MdOutlineCancel } from "react-icons/md";


function NavBar() {
  
    const [ismobile, setismobile] = useState(true);
    const[ismenuopen,setismenuopen]=useState(false)

 
  const handlemenu=()=>{   
    setismenuopen(!ismenuopen)
}
 
  return (
    <nav className='w-full '>
        <div className=' flex h-[100px] w-full items-center justify-between relative '>
            <div className=' ml-1 md:ml-5'>    
                <img  
                src={Murtazadeep}  
                className='  h-[150px]' 
                alt="murtazalogo" />  
            </div>

           <ul className= {`text-black items-center justify-center gap-x-3 md:gap-x-4 w-full hidden md:flex  text-sm md:text-md font-bold`} >
                {Navlinks.map((li)=> <li  className={`hover:text-blue-800 ${li?.active?"text-blue-700":null}`} key={li.id}>{li.name}</li>)}
            </ul>
    
  {ismenuopen ?<MdOutlineCancel onClick={handlemenu} size={25} className='md:hidden' />: <FaBars onClick={handlemenu} size={25} className='md:hidden'/>}
        
        </div>

        {ismenuopen && <ul className= {`text-black items-center justify-center   w-full md:hidden flex-col text-md font-bold backdrop-blur-lg  px-5 space-y-4 `} >
                {Navlinks.map((li)=> <li  className={`hover:text-blue-800  animate-ping-once  rounded-xl shadow-lg p-2 ${li?.active?"text-blue-700":null}`} key={li.id}>{li.name}</li>)}
            </ul>}
      
    </nav>
  )
}

export default NavBar