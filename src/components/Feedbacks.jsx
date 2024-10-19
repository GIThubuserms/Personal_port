import React from 'react'
import { Client,Clientmessage } from '../index.js'

function Feedbacks() {
  return (
    <div className='w-full mt-24 md:mt-32 space-y-10'>

        <div className='w-full  px-3 sm:px-5 md:px-12 lg:px-20 flex flex-col justify-center items-center'>
            <h1 className='font-extrabold  text-2xl md:text-4xl uppercase text-center'>{Clientmessage.disp}</h1>
            <p className='text-gray-500 text-md   md:w-[70%] text-center'>{Clientmessage.message}</p>
        </div>

         <div>
          {Client.map((client,index)=>
          <div>
            
          </div>
          )}
         </div>
    </div>
  )
}

export default Feedbacks
