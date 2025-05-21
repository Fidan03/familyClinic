import React from 'react'

const Nav = () => {
  return (
    <div className="flex w-[1200px] m-auto justify-between items-center">

        <div>
            <img src="https://fplogoimages.withfloats.com/actual/66f4fc472b3d64968f5cd6c6.jpeg" alt="logo" className="size-[100px]" />
        </div>

        <div className="flex gap-[15px] items-center text-gray-500">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Updates</p>
            <p>More Info</p>
            <p>Contact</p>
        </div>

        <div className="flex gap-[20px] items-center text-gray-500">
            <p className="border-gray-500 border-solid border-[1px] rounded-[100px] p-[5px]">Book Appointment</p>
            <p className="border-gray-500 border-solid border-[1px] rounded-[100px] p-[10px]">
              <img style={{color: "gray"}} src="https://www.iconpacks.net/icons/1/free-phone-icon-505-thumb.png" alt="phone call" className="size-[20px]" />
            </p>
            <p className="border-gray-500 border-solid border-[1px] rounded-[100px] p-[10px]">
              <img  src="https://img.icons8.com/ios7/600/search.png" alt="search bar" className="size-[20px]" style={{color: "gray"}}/>
            </p>
        </div>

    </div>
  )
}

export default Nav