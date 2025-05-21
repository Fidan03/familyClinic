import React from 'react'
import Slider from '@/components/slider'

const Header = () => {
  return (
    <div>

      <div>
        <Slider isBackground={true}/>
      </div>

      <div className='absolute top-70 left-40 z-1'>
        <p className='text-white text-[20px] font-bold tracking-[10px]'>WELCOME TO</p>
        <p className='text-white text-[50px] font-medium'>FAMILY CLINIC</p>
        <p className='text-white text-[15px]'>
          Family Multi Speciality Clinic  started its medical and dental  service since 2006 by Dr kiruthika Asokan, Dental Surgeon.
        </p>
        <div className='mt-[20px]'>
          <button className='bg-white text-gray-500 rounded-[100px] pt-[10px] pb-[10px] pl-[30px] pr-[30px] mr-[50px] cursor-pointer'>Meet Our Doctor</button>
          <button className='border-[1px] border-solid rounded-[100px] bg-transparent text-white pt-[10px] pb-[10px] pl-[30px] pr-[30px] cursor-pointer'>Call 08048030932</button>
        </div>
      </div>




    </div>
  )
}

export default Header