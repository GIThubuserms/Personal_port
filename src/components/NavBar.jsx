import React, { useEffect, useState } from 'react'
import Navlinks from '..'
import Murtazadev1logoupdated from'../assets/Murtazadev1logoupdated.png'
import { FaBars } from 'react-icons/fa';



function NavBar() {
  
    const [ismobile, setismobile] = useState(true);
    const[ismenuopen,setismenuopen]=useState(false)

 
  const handlemenu=()=>{   
    setismenuopen(!ismenuopen)
}
 
  return (
    <nav className='w-full'>
        <div className=' flex h-[100px] w-full items-center justify-between relative'>
            <div className=' md:ml-5'>    
                <img  
                src={Murtazadev1logoupdated}  
                className='h-[150px] w-[150px]' 
                alt="murtazalogo" />  
            </div>

           <ul className= {`text-black items-center justify-center gap-x-4 w-full hidden lg:flex  text-lg font-bold`} >
                {Navlinks.map((li)=> <li  className={`hover:text-blue-800 ${li?.active?"text-blue-700":null}`} key={li.id}>{li.name}</li>)}
            </ul>
 
     {ismobile && <FaBars onClick={handlemenu} size={25} className='lg:hidden'/>}
        </div>

        {ismenuopen && <ul className= {`text-black items-center justify-center   w-full lg:hidden flex-col text-lg font-bold backdrop-blur-lg  px-5 space-y-4 `} >
                {Navlinks.map((li)=> <li  className={`hover:text-blue-800  animate-ping-once  rounded-xl shadow-lg p-2 ${li?.active?"text-blue-700":null}`} key={li.id}>{li.name}</li>)}
            </ul>}
      
      
      
    </nav>
  )
}

export default NavBar