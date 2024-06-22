import React from 'react'

const HeroSection = () => {
  return (
    <div className= "flex flex-col    justify-center  mb-100 md:flex-row  md:justify-between gap-10 md:px-20">
     
     
        <div className="flex-3 order-2 m-5 md:m-0 md:order-1 rounded-2xl rounded-t-none bg-gray-100 p-4 px-8 pt-0 flex flex-col gap-4 align-middle justify-center">
          <div class="bg-white p-4 rounded shadow-md flex justify-between align-middle gap-4">
            <div>
              <h5 class="text-lg font-bold">PayPal integration</h5>
              <p class="text-gray-600">
                20% of users are asking for it, I need it to grow revenue.
              </p>
            </div>

            <button class="bg-white border border-gray-200 text-black font-bold py-2 px-4 rounded-lg">
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
              37
            </button>
          </div>
          <div class="bg-white p-4 rounded shadow-md flex justify-between align-middle gap-4">
            <div>
              <h5 class="text-lg font-bold">Images should be smaller</h5>
              <p class="text-gray-600">They're cropped on mobile.</p>
            </div>

            <button class="bg-white border border-gray-200 text-black font-bold py-2 px-4 rounded-lg">
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
          <div class="bg-white p-4 rounded shadow-md flex justify-between align-middle gap-4">
            <div>
              <h5 class="text-lg font-bold">Dark mode</h5>
              <p class="text-gray-600">PS: I don't pay for your app</p>
            </div>

            <button class="bg-white border border-gray-200 text-black font-bold py-2 px-4 rounded-lg">
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
              1
            </button>
          </div>
        <p className="text-center mt-[-10px]">Not that ❌
            </p>
        </div>

        <div className="flex align-middle order-1 items-center justify-center  md:order-2  flex-col  gap-5">
          <h1 className="font-[1000] text-center w-12/12   text-5xl md:text-7xl">Ship features user (really) want</h1>
          <p className='w-8/12 text-center'>
            Collect feedback from your customers, prioritize features, and build
            a product users love.
          </p>
          <div>
            <button className="bg-black hover:bg-white text-white hover:text-black border-collapse rounded py-2 px-4">
              Collect Feedback for fee
            </button>
            <p>It's 100% free. Really.</p>
          </div>
        </div>


      </div>
  )
}

export default HeroSection
