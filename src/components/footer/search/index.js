import React from 'react'

const Search = () => {
  return (
    <div className='bg-neutral-400'>

        <div className=' w-[1200px] m-auto flex flex-col items-center pb-[50px] pt-[50px]'>
            <p className='text-center text-white text-[25px] '>Get fresh health tips and alerts in your inbox.</p>
            <p className='text-center text-neutral-600 text-[15px] pt-[5px] pb-[15px]'>great way to stay updated about latest health tips, alerts and enhancements.</p>
            <div className='border-[1px] border-solid border-neutral-600 rounded-[5px] w-[600px] flex justify-between'>
                <input placeholder='You email address here...' className='p-[10px]'/>
                <button className='bg-neutral-600 text-white text-center w-[150px] cursor-pointer'>Subscribe</button>
            </div>
        </div>



    </div>
  )
}

export default Search