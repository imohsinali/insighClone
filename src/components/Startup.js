import Image from "next/image";
import React from "react";

const Startup = () => {
  return (
    <div className="bg-black flex flex-col gap-20 py-40  md:p-60 align-middle justify-center rounded-t-[60px] ">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center md:px-40 items-center">
        80% of startups fail because founders build useless products
      </h1>
      <div className="flex text-white gap-20  flex-col items-center md:flex-row justify-between align-middle ">
        <div className="flex align-middle flex-col text-center justify-center items-center">
          <Image
            src="/happy-face.png"
            alt="Logo"
            className="dark:invert"
            width={50}
            height={50}
          />
          <h1 className="text-2xl md:w-52 font-extrabold text-center justify-center items-center">Launch new feature</h1>
        </div>
        <div className="flex align-middle flex-col text-center justify-center items-center">
          <Image
            src="/neutral.png"
            alt="Logo"
            className="dark:invert"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-extrabold md:w-52">But nothing happens</h1>
        </div>
        <div className="flex align-middle flex-col text-center justify-center items-center">
          <Image
            src="/emoji.png"
            alt="Logo"
            className="dark:invert"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-extrabold md:w-52">Lose motivation and quit</h1>
        </div>
      </div>
    </div>
  );
};

export default Startup;
