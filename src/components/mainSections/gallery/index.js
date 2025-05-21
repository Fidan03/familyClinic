import Slider from '@/components/slider'
import React from 'react'

const Gallery = () => {
  return (
    <div className="w-[1200px] m-auto">
      <p className='text-center mb-[50px] text-neutral-400 text-[35px] font-medium'>Gallery</p>

      <div className='mb-[50px]'>
        <Slider isBackground={false}/>
      </div>
    </div>
  )
}

export default Gallery