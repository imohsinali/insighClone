import React from "react";

const TrendingCard = ({bg}) => {
    
  return (
    <div  
    style={{backgroundColor:bg, opacity:1}}
    className={`-z-10 -rotate-6 flex-3 order-2  md:m-0 md:order-1 rounded-2xl w-80  bg-${bg}-400 p-4   flex flex-col gap-4 align-middle justify-center`}>
      <h1 className="text-zinc-400 text-sm">TRENDING FEEDBACK</h1>
      <div class="bg-white p-4 rounded shadow-md flex justify-between align-middle gap-4">
        <div className="text-black">
          <h5 class="text-sm font-bold text-black">Clickable cards</h5>
          <p class="text-gray-600 text-xs">Make cards more accessible</p>
        </div>

        <button class="bg-white border text-xs border-gray-200 text-black font-bold py-2 px-4 rounded-lg">
          <svg
            class="w-3 h-3 transition duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          37
        </button>
      </div>
      <div class="bg-white p-4 rounded shadow-md flex justify-between align-middle gap-4">
        <div>
          <h5 class="text-sm font-bold text-black">Images should be smaller</h5>
          <p class="text-gray-600 text-xs">They're cropped on mobile.</p>
        </div>

        <button 
         className={`bg-${bg}-200 border border-gray-200 text-black font-bold py-2 px-4 rounded-lg`}>
          <svg
            class="w-4 h-4 transition duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          12
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
