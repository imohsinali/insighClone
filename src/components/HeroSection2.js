import React from "react";
import Image from "next/image";
import { FaBeer, FaStar } from "react-icons/fa";
const HeroSection2 = () => {
  return (
    <div class="flex flex-col md:flex-row justify-between px-10 gap-4">
      <div class="flex flex-col items-center px-10 gap-4">
        <div class="flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div class="text-sm text-center">
          <p>Amazing. Canny has a lot of small annoyances.</p>
        </div>

        <div class="flex items-center">
          <div>
            <Image
              src="/pieter.webp"
              alt="Logo"
              className="dark:invert rounded-full"
              width={34}
              height={34}
            />
          </div>
          <h2 class="ml-2 text-sm font-bold">Pieter Levels</h2>
        </div>
      </div>
      <div class="flex flex-col items-center px-10 gap-4">
        <div class="flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div class="text-sm text-center">
          <p>Amazing. Canny has a lot of small annoyances.</p>
        </div>

        <div class="flex items-center">
          <div>
            <Image
              src="/pieter.webp"
              alt="Logo"
              className="dark:invert rounded-full"
              width={34}
              height={34}
            />
          </div>
          <h2 class="ml-2 text-sm font-bold">Pieter Levels</h2>
        </div>
      </div>
      <div class="flex flex-col items-center px-10 gap-4">
        <div class="flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div class="text-sm text-center">
          <p>Amazing. Canny has a lot of small annoyances.</p>
        </div>

        <div class="flex items-center">
          <div>
            <Image
              src="/pieter.webp"
              alt="Logo"
              className="dark:invert rounded-full"
              width={34}
              height={34}
            />
          </div>
          <h2 class="ml-2 text-sm font-bold">Pieter Levels</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
