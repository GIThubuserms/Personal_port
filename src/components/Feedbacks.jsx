import React from 'react'
import { Client,Clientmessage } from '../index.js'

function Feedbacks() {
  return (
    <div className='w-full mt-24 md:mt-32 space-y-10'>

        <div className='w-full  px-3 sm:px-5 md:px-12 lg:px-20 flex flex-col justify-center items-center'>
            <h1 className='font-extrabold  text-2xl md:text-4xl uppercase text-center'>{Clientmessage.disp}</h1>
            <p className='text-gray-500 text-md   md:w-[70%] text-center'>{Clientmessage.message}</p>
        </div>


         <div className=' sm:px-10 md:px-24 lg:px-36 w-full flex flex-col lg:flex-row justify-center  items-center lg:items-start  gap-x-6 overflow-x-hidden     '>
            {Client.map((client,index)=>
            <div className='main flex gap-3 justify-start items-center p-2 h-[200px] w-[100%] md:w-[70%] lg:w-[50%] animate-translation '>

            <div className='left  w-[20%] flex justify-start items-center '>
             <img src={client.img} className='rounded-[150px] w-full h-full' alt="" />
            </div>
            
            <div className='right w-[80%] flex flex-col  gap-2'>
              <div className='right-upper text-md font-semibold'>{client.name}</div>
              <div className='right-lower text-gray-500 text-xs'>{client.disp}</div>
            </div>
            
            </div>
            )}
          
         </div>
    </div>
  )
}

export default Feedbacks
