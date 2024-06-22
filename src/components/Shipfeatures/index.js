import React from 'react'
import LeftComponent from './leftComponent'
import RightComponent from './rightComponent'
import BrandCard from './brandCard'
import DiscoverCard from './DiscoverCard'

const ShipFeatures = () => {
  return (
    <div  className="p:10 overflow-hidden  pt-40 px-4 bg-white">
       <div className="flex  justify-start ">
            <h1 className="text-6xl font-extrabold text-left  max-w-[600px]">
              Ship features users really want
            </h1>
          </div>

          <div className="mt-20 flex gap-10 flex-col md:flex-row  justify-between">
          
         <LeftComponent/>
         <RightComponent/>
            
          </div>

          <div className="mt-20 overflow-hidden  flex gap-10 flex-col md:flex-row  justify-between">

            <BrandCard/>
            <DiscoverCard/>
          </div>

    </div>
  )
}

export default ShipFeatures
