import React from 'react'
import Image from 'next/image'
import phone from '../../../assets/icons/phone.png'
import doc from '../../../assets/images/doc.jpg'

const MeetOurDoctor = () => {
  return (
    <div className="bg-neutral-100 pb-[150px]">


      <div className="w-[1200px] m-auto">
        <p className="text-center text-neutral-400 text-[30px] font-bold p-[50px]">Meet Our Doctor</p>
            <div className="flex rounded-[15px] shadow-xl/40">

              <div className="w-[400px] mt-[150px]">
                <Image src={doc} className="w-[400px] h-[180px] object-cover rounded-br-[50%] rounded-tr-[50%]"/>
              </div>


              <div className="w-[770px] p-[20px]">
                <p className="text-[50px] text-neutral-400 font-light">Kiruthika Asokan</p>
                <p className="text-[15px] mt-[15px] mb-[15px] text-gray-500">Dental Surgeon</p>
                <div className="flex items-center gap-[5px] mb-[15px]">
                  <div>
                    <Image src={phone} className="size-[20px]"/>
                  </div>
                  <p className="text-neutral-400">+91-9171333368</p>
                </div>
                <p className="text-gray-500 text-[15px]">
                  Dr. Kiruthika Asokan completed her BDS from the prestigious SRM Medical University in 2004. Subsequently, she pursued her certified course in Rotary Root Canal Treatment in 2013. Her skill and commitment in dentistry create trust and confidence in every smile she works on. Based in Karambakkam, Porur, Chennai she has more than 19 years of experience and is practicing as a full-time Dentist in a Family Clinic.</p>
                <p className="text-gray-500 text-[15px] mt-[20px]">
                  In 2017, her outstanding skills and strong dedication placed her on the prestigious "Top 10 Dentists" list recognized by Business Review Today. She is also valued member of the respected Indian Dental Association.</p>

                <div className="flex gap-[50px] mt-[50px]">
                  <button className="bg-neutral-400 rounded-[5px] w-[150px] h-[50px] text-white cursor-pointer">READ MORE</button>
                  <button className="text-neutral-400 rounded-[5px] border-solid border-[1px] border-neutral-400 w-[200px] cursor-pointer">BOOK APPOINTMENT</button>
                </div>

              </div>

              
            </div>

      </div>




    </div>
  )
}

export default MeetOurDoctor