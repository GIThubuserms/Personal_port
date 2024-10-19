import React from 'react'
import { projectsmessage, projects } from '../index.js'
import {easeInOut, motion} from 'framer-motion'

function Projects() {
  return (
    <div className='mt-24'>

      <div className='flex justify-start  px-8 sm:px-12 md:px-20 lg:px-44 text-4xl w-[60%] font-semibold my-5' >
        <h1>{projectsmessage.disp.toUpperCase()}</h1>
      </div>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2  px-8 sm:px-12 md:px-20  lg:px-44'>
        {projects.map((proj, index) =>
          <div key={index}  className='rounded-lg shadow-blue-300 shadow-2xl hover:shadow-white '>
            <div
              style={{ backgroundImage: `url(${proj.img})`}}
              className="h-[400px] flex justify-center items-end bg-origin-content bg-auto bg-no-repeat bg-center ">             
             <motion.a 
             initial={{opacity:1,scale:0.5}}
             whileHover={{opacity:1,scale:1}}
             animate={{easeInOut,duration:2}}
             href={proj.link} className='text-4xl  font-semibold font-serif'>VIEW LIVE</motion.a>
              </div>
               <h4 className='text-2xl font-semibold mt-5'>{proj.title}</h4>
              <p className='text-md text-gray-600'>{proj.disp}</p>
            
          </div>
        )}
    </div>
    </div>
  )
}

      export default Projects
