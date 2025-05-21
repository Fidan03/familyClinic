import React from 'react'
import Image from 'next/image'
import phone from '../../../assets/icons/phone.png'
import envelope from '../../../assets/icons/envelope.png'
import location from '../../../assets/icons/location.png'
import world from '../../../assets/icons/world.png'
import whatsapp from '../../../assets/icons/whatsapp.png'
import facebook from '../../../assets/icons/facebook.png'
import twitter from '../../../assets/icons/twitter.png'
import linkedin from '../../../assets/icons/linkedin.png'
import pinterest from '../../../assets/icons/pinterest.png'


const Contact = () => {
  return (
    <div className='bg-neutral-600'>

      <div className='w-[1200px] m-auto cursor-pointer pt-[50px] pb-[50px] flex gap-[100px] justify-center'>

        <div>

          <div className='flex gap-[10px] items-center m-[15px]'>
            <div className='size-[25px]'><Image src={phone}/></div>
            <p className='text-[30px] underline text-white'>08048030932</p>
          </div>

          <div className='flex gap-[10px] items-center m-[15px]'>
            <div className='size-[25px]'><Image src={envelope}/></div>
            <p className='text-[15px] text-white'>info@familymultispecialityclinic.com</p>
          </div>

          <div className='flex gap-[10px] items-center m-[15px]'>
            <div className='size-[25px]'>
              <Image src={location}/>
            </div>
            <p className='text-[15px] text-white'>1st Street, Rajeswari Nagar, karambakkam, Porur, Chennai, Tamil Nadu, India</p>
          </div>

          <div className='flex gap-[10px] items-center m-[15px]'>
            <div className='size-[25px]'>
              <Image src={world}/>
            </div>
            <p className='text-[15px] text-white'>http://www.familymultispecialityclinic.com/latest-updates/1</p>
          </div>

        </div>




        <div>
          <p className='text-white text-[20px]'>Share website on</p>
          <div className='flex gap-[20px] border border-solid border-white p-[10px] rounded-[5px] mt-[15px]'>
            <div className='size-[20px]'>
              <Image src={whatsapp}/>
            </div>
            <div className='size-[20px]'>
              <Image src={facebook}/>
            </div>
            <div className='size-[20px]'>
              <Image src={twitter}/>
            </div>
            <div className='size-[20px]'>
              <Image src={linkedin}/>
            </div>
            <div className='size-[20px]'>
              <Image src={pinterest}/>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Contact