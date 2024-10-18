import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/atom.png'
import appwrite from '../assets/appwrite.png'
import Express from '../assets/Express.png'
import Nodejs from '../assets/Nodejs.png'
import MongoDB from '../assets/MongoDB.png'
import github from '../assets/github.png'
import redux from '../assets/redux.png'
import Vitejs from '../assets/Vitejs.png'
import { FaPhoneAlt } from "react-icons/fa";



const images= [html,css,javascript,react,tailwind,appwrite,Nodejs,Express,MongoDB,redux,Vitejs,github]


function Expertise() {
    return (
        <div className='w-full px-2 md:px-10 h-full'>
            <div className=' flex flex-col sm:flex-row px-26 gap-x-5 gap-y-8 w-full'>
 
                <div className='w-[100%] px-2 lg:px-0 sm:w-[50%] grid grid-cols-3 lg:grid-cols-3  gap-5 sm:gap-4'>
                   {images.map((img,index)=> <img src={img} className='h-14 mx-auto' key={index}/>)}

                </div>

                <div className='w-[100%] sm:w-[50%] h-[450px] flex-col  space-y-16 md:space-y-20 '>
                   
                   
                    <div className='upper flex w-full  gap-x-6 justify-center px-2 md:px-5 '>
                       <div className='upper-right border-dotted  w-[50%]  md:w-[30%] lg:w-[40%] border-gray500 bg-blue-00 border-[5px] h-[150px] flex flex-col justify-center items-end '>
                            <h1 className='text-purple-600 text-7xl md:text-9xl    font-semibold'>2</h1>
                       </div>
                       <div className='upper-left flex flex-col w-[50%] md:w-[30%] lg:w-[40%] bg-green-00 justify-center  md:pl-5 h-[150px]'>
                        <p className='font-semibold text-sm md:text-2xl '>Years</p>
                        <p className='font-semibold text-sm md:text-2xl'>Experience</p>
                        <p className='font-semibold text-sm md:text-2xl'>Working</p>
                       </div>
                       
                    </div>
                    
                    <div className='lower flex w-full '>
                            <div className='left w-[50%] '><FaPhoneAlt size={70} className='mx-auto' /></div>
                            <div className='right w-[50%] flex flex-col justify-center'>
                                <a className='uperr_right text-xl font-semibold text-purple-800'  href='tel:+923180601365'>CALL US NOW</a>
                                <div className='lower_right'>0318-0601365</div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Expertise
