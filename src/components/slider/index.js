import React, { useEffect, useState } from 'react'
import SliderContent from '../SliderContent/index'
import sliderImage from '../../data/imageData/index'
import DocSlider from '../docSlider/index';
import galleryImage from '../../data/galleryData/index'
import Arrows from '../arrows';



const lenBg = sliderImage.length -1;

const lenGal = galleryImage.length -1;


const Slider = ({isBackground}) => {

  const[bgindex, setBgIndex] = useState(0);

  const[galIndex, setGalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(bgindex === lenBg ? 0 : bgindex +1);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgindex]);


  useEffect(() => {
    const interval = setInterval(() => {
      setGalIndex(galIndex === lenGal ? 0 : galIndex +1);
    }, 5000);
    return () => clearInterval(interval);
  }, [galIndex]);



  return (
    <div>
      <div className='relative'>
        {isBackground ? 
        
        (<SliderContent bgindex={bgindex} sliderImage={sliderImage}/>) : 
        
        (<div>
          <div>
            <DocSlider galIndex={galIndex} galleryImage={galleryImage} />
          </div>
          
          <div className='relative bottom-[150px]'>
            <Arrows 
          
            prevSlide={() => setGalIndex(galIndex < 1 ? lenGal : galIndex - 1)}
          
            nextSlide={() => setGalIndex(galIndex === lenGal ? 0 : galIndex + 1)}

            />
          </div>


        </div>)}
        
      </div>
    </div>

  )
}

export default Slider