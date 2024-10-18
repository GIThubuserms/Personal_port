import React from 'react';
import { services,servicemessage } from '../index.js';

function Services() {
  return (
    <div className='w-full sm:mt-20 md:mt-24'>
        <div className='flex flex-col justify-center items-center px-2 sm:px-6 md:px-36 space-y-9 lg:px-48 text-center mb-5' >
            <h1 className='text-3xl font-extrabold text-center'>{servicemessage.tittle.toUpperCase()}</h1>
            <p className='font-extralight'>{servicemessage.disp}</p>
        </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center px-5'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-between space-y-3 p-5 border hover:shadow-gray-700  hover:shadow-lg rounded-lg h-full'
          >
            <img src={service.img} className='h-[70px]' alt={`photo${index}`} />
            <h4 className='text-xl font-semibold'>{service.Title}</h4>
            <p className='text-gray-600'>{service.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
