import React from 'react'

const leftComponent = () => {
  return (
        <div class="bg-yellow-400 h-96 md:w-96 rounded-xl p-4 relative group ">
              <h1 class="font-bold text-3xl">Collect user feedback</h1>
              <p class="max-w-[80%]">
                Use your Insighto's board to let users submit features they want
              </p>
              <div class="absolute right-0 z-20 top-32 h-64 md:w-80 rounded-tl-xl rounded-br-xl bg-slate-50 p-4">
                <p class="text-sm">SUGGEST A FEATURE</p>
                <p class="p-10 border-r-yellow-200 group-hover:hidden">
                  Notifica <span class="border border-yellow-300" />
                </p>
                <div class=" hidden mt-4 bg-white border border-gray-200 text-black text-sm leading-10  text py-2 px-2 rounded-lg group-hover:block">
                  <p>Notifications should be visible only on certain pages.</p>
                  <p>
                    Terms & privacy pages don't need them{" "}
                    <span class="border border-yellow-300" />
                  </p>
                  <div className="flex justify-end">
                    <button class="flex justify-end mt-4 bg-yellow-400 p-1 px-4 font-bold border border-gray-200 rounded-xl">
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default leftComponent
