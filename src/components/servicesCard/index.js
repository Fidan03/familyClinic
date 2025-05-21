import React, { useState } from 'react'
import servicesData from '../../data/servicesData/index'
import Image from 'next/image';

const Service = () => {

    const [services, setServices] = useState([...servicesData]);


  return (
    <section className='flex justify-between'>
        {services.map((service) => (
        <div key={service.id} className='w-[370px] h-[475px] rounded-[10px] p-[15px] bg-white'>
            <Image src={service.src} alt={service.alt} className='rounded-[10px] h-[250px] object-cover cursor-pointer blur-[1px] hover:blur-none'/>
            <p className='text-[20px] mt-[15px] mb-[20px] cursor-pointer hover:underline'>{service.title}</p>
            <p className='truncate'>{service.description}</p>
            <p className='text-end text-neutral-400 mt-[10px] mb-[20px] text-[15px] cursor-pointer underline hover:no-underline'>READ MORE</p>
            <button className='text-center w-[100%] bg-neutral-400 rounded-[15px] p-[10px] text-white cursor-pointer'>BOOK APPOINTMENT</button>
        </div>
        ))}
    </section>
  )
}

export default Service