import React, { useEffect, useState } from 'react'
import SliderContent from '../SliderContent/index'
import sliderImage from '../../data/imageData/index'



const lenBg = sliderImage.length -1;






const Slider = () => {

  const[bgindex, setBgIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(bgindex === lenBg ? 0 : bgindex +1);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgindex]);






  return (
    <div>
      <div className='relative'>
        
        <SliderContent bgindex={bgindex} sliderImage={sliderImage}/>


        
      </div>
    </div>

  )
}

export default Slider