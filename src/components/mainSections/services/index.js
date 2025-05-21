import React from 'react'
import Service from '@/components/servicesCard'

const Services = () => {
  return (
    <div className="bg-neutral-400 ">


      <div className="w-[1200px] m-auto">
        <p className="text-[30px] text-center text-white pt-[50px] mb-[20px] font-bold">Services</p>
        <div>
          <Service/>
        </div>
        <button className="cursor-pointer mt-[20px] text-white left-265 relative mb-[50px]">VIEW ALL SERVICES</button>
      </div>


    </div>
  )
}

export default Services