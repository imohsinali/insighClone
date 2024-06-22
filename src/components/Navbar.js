import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex min-w-full p-4 md:px-12  justify-between align-middle fixed  z-20  bg-yellow-300 ">
        <div className="flex-1">
          <Image
            src="/logoAndNameTransparent.webp"
            alt="Logo"
            className="dark:invert"
            width={120}
            height={24}
          />
        </div>

        <div className="flex justify-center align-middle rounded-lg  w-20 h-12 p-3 bg-black">
          <h2 className="text-white">Login</h2>
        </div>
      </div>
  )
}

export default Navbar
