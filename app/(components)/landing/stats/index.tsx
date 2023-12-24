import React from "react";
import FramerDiv from "@/app/(components)/framermotion/divblock";

const StatSection = () => {
  return (
    <div className="w-full bg-white py-10 relative overflow-hidden">
      <div className="bg-white w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -left-[100px] absolute z-10"></div>
      {/* <div className="bg-baby-blue w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -right-[100px] absolute z-10"></div> */}

      <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt bottom-10 left-[60%] z-10"></div>

      <FramerDiv delay={0.25}>
        <div className="custom_container mx-auto h-full z-20">
          <div className=" py-5 w-full">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold text-slate-800 z-50">
                Our Stats
              </h1>
              <p className="text-slate-800 text-lg">
                Express your idea in a few words!
              </p>
            </div>
          </div>
          <div className="service-cards-containers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center  w-full justify-center mx-auto py-5 relative my-6">
            <div className="bg-transparent w-[100px] h-[100px] rounded-full  border-[6px] top-[0px]  border-baby-blue -left-[50px] absolute z-10"></div>
            <div className="flex  flex-col items-center  justify-center  rounded cursor-pointer text-slate-800 z-20 gap-4">
              <h1 className="text-5xl font-semibold">
                32 <span className="text-denim">K</span>
              </h1>
              <p className="text-xl font-semibold">Active User</p>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectet adipiscing elit eget
                quamumto.
              </p>
            </div>
            <div className="flex  flex-col items-center  justify-center  rounded cursor-pointer text-slate-800 z-20 gap-4">
              <h1 className="text-5xl font-semibold">
                32 <span className="text-denim">M</span>
              </h1>
              <p className="text-xl font-semibold">Active User</p>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectet adipiscing elit eget
                quamumto.
              </p>
            </div>
            <div className="flex  flex-col items-center  justify-center  rounded cursor-pointer text-slate-800 z-20 gap-4">
              <h1 className="text-5xl font-semibold">
                32 <span className="text-denim">%</span>
              </h1>
              <p className="text-xl font-semibold">Active User</p>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectet adipiscing elit eget
                quamumto.
              </p>
            </div>
          </div>
        </div>
      </FramerDiv>
    </div>
  );
};

export default StatSection;
