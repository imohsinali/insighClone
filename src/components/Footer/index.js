import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bottom-40 px-4 gap-5 min-h-screen bg-black flex flex-col justify-center  items-center align-middle">
      <h1 className=" border-b- text-6xl md:text-9xl  font-[1000] text-white text-center">
        Insighto
      </h1>
      <hr className="bg-gray-600  w-10/12" />
      <div className="flex flex-col align-middle items-center md:flex-row  justify-between md:gap-96">
        <div className="flex flex-col md:flex-row  align-middle gap-4 items-center">
          <Image
            src="/pieter.webp"
            alt="Logo"
            className="dark:invert rounded-full"
            width={34}
            height={34}
          />
          <h1 className="text-white">
            By Marc — maker of ShipFast, Zenvoice, IndiePage , and 20+ others.
          </h1>
        </div>
        <div className="flex  align-middle gap-4 items-center text-white">
          <h1>Privacy</h1>
          <h1>Terms</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
