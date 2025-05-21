import React from 'react'
import prev from '../../assets/images/prev.png'
import next from '../../assets/images/next.png'
import Image from 'next/image'

const Arrows = ({prevSlide, nextSlide}) => {
  return (
    <div className='flex w-[100%] justify-between'>
        <span className='size-[30px] bg-neutral-400 rounded-[100px] p-[5px]' onClick={prevSlide}>
          <Image src={prev} />
        </span>
        <span className='size-[30px] bg-neutral-400 rounded-[100px] p-[5px]' onClick={nextSlide}>
          <Image src={next}/>
        </span>
    </div>
  )
}

export default Arrows