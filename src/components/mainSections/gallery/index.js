import React from 'react'
import DocSlider from '../../GallerySlider/index'

const Gallery = () => {
  return (
    <div className="w-[1200px] m-auto">
      <p className='text-center mb-[50px] text-neutral-400 text-[35px] font-medium'>Gallery</p>

      <div className='mb-[50px]'>
        <DocSlider />
      </div>
    </div>
  )
}

export default Gallery