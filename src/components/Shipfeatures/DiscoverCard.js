import Image from "next/image";
import React from "react";

const DiscoverCard = () => {
  return (
    <div className="overflow-hidden bg-black text-white flex flex-col gap-6  h-96 md:w-96 rounded-2xl p-4 relative group hover:overflow-visible">
      <h1 className="font-bold text-3xl">Discover new ideas </h1>
      <p className="max-w-[80%]">Users can chat and discuss features.</p>
      <div className="bg-white text-black p-4 rounded shadow-md flex justify-between align-middle gap-4">
        <div>
          <p className="text-gray-600  text-sm">
            20% of users are asking for it, I need it to grow revenue.
          </p>

          <div className="flex items-center">
            <div>
              <Image
                src="/pieter.webp"
                alt="Logo"
                className="dark:invert rounded-full"
                width={24}
                height={24}
              />
            </div>
            <h2 className="ml-2 text-[10px] ">Marc Lou • Sep 1, 2024F</h2>
          </div>
        </div>
      </div>
   
      <div
  className="bg-white  m-4 text-black p-4 rounded shadow-md flex justify-between align-middle gap-4 absolute right-0 bottom-10 translate-x-full opacity-0 invisible group-hover:visible duration-300 ease-in-out transition  group-hover:translate-x-0 group-hover:opacity-100"
>
        <div>
          <p className="text-gray-600  text-sm">
            20% of users are asking for it, I need it to grow revenue.
          </p>

          <div className="flex items-center">
            <div>
              <Image
                src="/pieter.webp"
                alt="Logo"
                className="dark:invert rounded-full"
                width={24}
                height={24}
              />
            </div>
            <h2 className="ml-2 text-[10px] ">Marc Lou • Sep 1, 2024F</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;