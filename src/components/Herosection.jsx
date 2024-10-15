import React from 'react'
import personalportbanner from '../assets/personalportbanner.webp'
import { easeIn, motion } from "framer-motion"

function Herosection() {
  return (
    <div>
      <div 
        className='flex mt-9 w-full ml-6 justify-center items-center'>

        <motion.div
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1}}
         transition={{ ease:'easeOut' ,duration:1}}
         className='w-[100%] sm:w-[50%] space-y-5  lg:space-y-6 px-3 lg:px-36 '> 

            <div className='w-full flex h-auto items-center '>
                <div className=' text-2xl lg:text-3xl flex w-[250px] font-semibold'>WELCOME &#128075;</div>
                <div className=' hidden md:flex w-[250px] bg-black h-[3px]'></div>
            </div>
            
            <div>
                <p className='text-3xl lg:text-5xl font-semibold space-x-2'>I AM MURTAZA <br></br> SALEEM</p>
            </div>

            <div>
                <p className='text-xl lg:text-2xl font-semibold'>FRONTEND WEB DEVELOPER</p>
            </div>

            <div className='flex space-x-3 '>
                <button className='bg-gradient-to-r from-[#854fee] to-[#4458dc] w-[120px] rounded-md   p-2   hover:to-[#fffff]  text-white hover:text-black'>HIRE ME</button>
                <button className=' hover:bg-gradient-to-r  hover:from-[#854fee] hover:to-[#4458dc] p-2   w-[120px]  rounded-md  text-black hover:text-white'>GET CV</button>
            </div>
        </motion.div>

        <div className=' w-[50%] hidden sm:flex '>
            <img src={personalportbanner} className='h-[450px] ' alt="" />
         </div>

      </div>
    </div>
  )
}

export default Herosection
