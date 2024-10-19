import React from 'react'
import {contact} from '../index.js'

function ContactUs() {
  return (
    <div className='w-full h-screen px-2 sm:px-12 md:px-24 lg:px-40 py-20'>
      
      <div className='flex flex-col justify-center items-center  text-center  gap-4 sm:gap-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl w-full h-full'>
       <h1 className=' text-3xl sm:text-4xl font-semibold '>{contact.h1}</h1>
       <p className='w-[70%] '>{contact.disp}</p>
        <input className='w-[60%] h-[40px] rounded-md  ' type="email" name="" placeholder='Email address' id="" />
        <a href='mailto:murtazasaleem2004@gmail.com' className='font-semibold rounded-md border-b-2 '>GET STARTED</a>

      </div>
    </div>
  )
}

export default ContactUs
