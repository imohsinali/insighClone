import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import Navbar from "@/components/Navbar";
import ShipFeatures from "@/components/Shipfeatures";
import Startup from "@/components/Startup";
import Image from "next/image";
import { FaBeer, FaChevronCircleRight, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-400 flex flex-col  ">
      <Navbar />
    
      <div>
        

<button id="marketing-banner" tabindex="-1" class="fixed    z-50 flex flex-col md:flex-row justify-between w-44 p-2  bg-white border border-gray-100 rounded-lg shadow-sm   bottom-3 right-3 dark:bg-gray-700 dark:border-gray-600">
    <div class="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
      <a className="flex align-middle items-center">
        <p className="text-xs">Build With</p>
        <Image src={'/lightning.png'} width={15} height={15}/> 
        <h1 className="text-sm font-extrabold">Ship Fast</h1>
      </a>
    </div>
   
</button>


     
      </div>
      <div className="min-h-screen mt-20 bg-yellow-400 flex flex-col gap-10 md:fixed  ">
        <HeroSection />
        <HeroSection2 />
      </div>
      <div className="flex flex-col  z-10 mt-[10%] md:mt-[44%]  bg-white  ">
        <Startup />
        <ShipFeatures />
        <div className="bg-black w-full p-20 mt-40">
          <h1 className="text-center text-white">
            <span className="font-extrabold"> Where's the pricing? </span>{" "}
            There's none, because Insighto is 100% free 💛
          </h1>
        </div>
        <div className="bg-black">
          <div className="flex justify-center md:px-80 min-h-screen bg-yellow-400 items-center rounded-b-[60px]">
            <div className="flex gap-20 align-middle order-1 items-center justify-center  md:order-2  flex-col ">
              <h1 className="font-[1000] text-center w-12/12   text-5xl md:text-7xl">
                Ship features user (really) want
              </h1>
              <div>
                <button className="bg-black hover:bg-white text-white hover:text-black border-collapse rounded py-2 px-4">
                  Collect Feedback for fee
                </button>
              </div>
            </div>
          </div>
        </div>
   
        <Footer />
      </div>
    </main>
  );
}
