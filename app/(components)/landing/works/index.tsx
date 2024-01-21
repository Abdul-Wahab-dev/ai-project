import React from "react";
import FramerDiv from "@/app/(components)/framermotion/divblock";
import Image from "next/image";
const HowItWorks = () => {
  return (
    <div className="w-full bg-white py-10 relative overflow-hidden">
      {/* <div className="bg-water w-[200px] h-[200px] rounded-full  border-[15px] -top-[100px]  border-baby-blue -left-[100px] absolute z-10"></div> */}
      {/* <div className="bg-baby-blue w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -right-[100px] absolute z-10"></div> */}

      <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt left-[60%] z-10"></div>

      <div className="custom_container mx-auto h-full z-20">
        <div className=" py-5 w-full">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold text-slate-800 z-50">
              How it works
            </h1>
            <p className="text-slate-800 text-lg">Try our cutting-edge tools</p>
          </div>
        </div>
        {/* <FramerDiv delay={0.25}> */}
        <div className="how-it-works text-black">
          <div className=" w-full h-full flex items-center justify-center">
            <div className="flex-1 relative z-50">
              <div className="w-[80%] bg-white flex items-center justify-between py-14 px-3 shadow-xl rounded-2xl absolute z-50 -right-16 top-[50%] -translate-y-[50%]">
                <div className="w-[70%] px-5">
                  <h1 className="text-3xl font-semibold">
                    New potential clients
                  </h1>
                  <p>
                    Sit back and relax. You'll get a notification as a steady
                    stream of new leads get added to your account every few days
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-bolt w-[70px] h-[70px] shadow-2xl rounded-full flex items-center justify-center text-2xl text-white">
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex-1 flex items-center">
              <div className="image-1 shadow-lg h-[400px] w-full"></div>
            </div>
          </div>
        </div>
        {/* </FramerDiv> */}
      </div>
    </div>
  );
};

export default HowItWorks;
