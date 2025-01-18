import React from 'react'
import {Abouts} from '../index.js'
import MurtazaMERNDEV from '../assets/MurtazaMERNDEV.pdf'
import personalportfolioaboutbg from '../assets/personalportfolioaboutbg.webp'
import { Link } from 'react-router-dom'

function About() {
  return (
   
    <div className='flex px-6  ml-6 sm:ml-0 sm:px-4  md:px-10  lg:px-30 gap-5 mt-28 mb-28'>

      <div className='hidden sm:flex w-[50%]   justify-center items-center '>
        <img src={personalportfolioaboutbg} 
        className='h-[250px]'
        alt="Portfolio"/>
      </div>

      <div className=' flex-col w-[100%] md:px-0 sm:w-[50%]  space-y-3 sm:space-y-2  md:space-y-3 my-auto '>
        <h2 className='text-4xl font-extrabold'>{Abouts.h3}</h2>
        <p className='font-sans text-gray-500 '>{Abouts.about1}</p>
        <p className='font-sans text-gray-500 '>{Abouts.about2}</p>
        <p className='font-sans text-gray-500 '>{Abouts.about3}</p>
        <div className='flex justify-center items-center'>
        <a href={MurtazaMERNDEV}
        download className=' bg-gradient-to-r  px-1 md:px-2 py-2  from-[#854fee] to-[#4458dc] rounded-lg  hover:text-black text-white'>DOWNLOAD CV</a>
        </div>
        </div>
    </div>
  
  )
}

export default About
