import React from 'react'
import {fotter} from '../index.js'
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

function Fotter() {
  return (
    <div className='flex flex-col mb-4 justify-center gap-3 items-center text-center'>
         
      <div>
        <img src={fotter.logo} className='h-[100px]' alt="" />
      </div>
      
      <div>
        <p className='text-xl font-extrabold '>{fotter.tittle}</p>
      </div>
    
    
    <div className='flex gap-3'>
       <a href="https://www.linkedin.com/in/murtaza-saleem9704/"><CiLinkedin size={38}/></a>
       <a href="https://www.instagram.com/murtaza__.s/"><FaInstagram size={35} /></a>
       <a href="https://github.com/GIThubuserms"><FiGithub size={35} /></a>
       <a href='mailto:murtazasaleem2004@gmail.com'><SiGmail size={35}/></a>
    </div>
    
  
    
    <div className='flex '>
        <p className='font-serif'>{fotter.disp1}</p>
        <p className='font-serif font-extrabold ml-1 text-red-800'>MS</p>
        
    </div>
      
    </div>
  )
}

export default Fotter

