import React from 'react'
import TrendingCard from '../TrendingCard'

const BrandCard = () => (
  <div className="bg-black relative overflow-hidden flex flex-col text-white h-96 md:w-8/12 rounded-xl p-4 pt-0 overflow-hidden group">
    <div className="overflow-hidden p-4 absolute z-50 ">
      <h1 className="font-bold text-3xl">Prioritize features</h1>
      <p className="md:max-w-[80%]">
        Users upvote features they want. You know what to ship next.
      </p>

      <div className="mt-20 flex justify-end transition duration-300 ease-in-out group-hover:-translate-x-72">

  {[...Array(8)].map((_, i) => (
    <div 
      className={  `-mr-10    transition duration-300 ` }
    >
      <TrendingCard key={i} bg={i%2==0? 'pink':"lightgreen"} />
    </div>
  ))}
</div>
    </div>
  </div>
)

export default BrandCard