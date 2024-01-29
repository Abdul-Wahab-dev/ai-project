import React from "react";
import FramerDiv from "@/app/(components)/framermotion/divblock";
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
            <p className="text-slate-800 text-lg">
              Navigate Through the Magic – Explore Our Step-by-Step Guide{" "}
            </p>
          </div>
        </div>
        <div className="how-it-works text-black flex flex-col gap-24 mt-10">
          <FramerDiv delay={0.25}>
            <div className=" w-full flex-col-reverse lg:flex-row h-full flex items-center justify-center">
              <div className="lg:flex-1 relative z-50 h-[150px] md:h-[220px] w-full lg:h-full">
                <div className="w-[85%] sm:w-[75%] lg:w-[85%] xl:w-[70%] flex-col-reverse lg:flex-row bg-white flex items-center justify-between py-6 lg:py-10 px-3 shadow-xl rounded-2xl absolute z-50 left-[50%] gap-5 lg:gap-0 -top-16 -translate-x-[50%] lg:-right-16 lg:top-[50%] lg:-translate-y-[50%] lg:-translate-x-0">
                  <div className=" lg:w-[85%] xl:w-[70%] px-5">
                    <h1 className="text-2xl font-semibold text-left">
                      Upload File
                    </h1>
                    <p>
                      Step 1: Effortless Start – Upload Your File for Instant
                      Transformation!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-bolt w-[50px] h-[50px] md:w-[70px] md:h-[70px] shadow-2xl rounded-full flex items-center justify-center text-2xl text-white">
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex-1 flex items-center">
                <div className="image-1 shadow-lg h-[280px] md:h-[350px] xl:h-[400px] w-full"></div>
              </div>
            </div>
          </FramerDiv>
          <FramerDiv delay={0.25}>
            <div className=" w-full flex-col-reverse lg:flex-row-reverse h-full flex items-center justify-center">
              <div className="lg:flex-1 relative z-50 h-[150px] md:h-[220px] w-full lg:h-full">
                <div className="w-[85%] sm:w-[75%] lg:w-[85%] xl:w-[70%] flex-col-reverse lg:flex-row-reverse bg-white flex items-center justify-between py-6 lg:py-10 px-3 shadow-xl rounded-2xl absolute z-50 left-[50%] gap-5 lg:gap-0 -top-16 -translate-x-[50%] lg:-left-16 lg:top-[50%] lg:-translate-y-[50%] lg:-translate-x-0">
                  <div className=" lg:w-[85%] xl:w-[70%] px-5">
                    <h1 className="text-2xl font-semibold text-left">
                      Refine Your Preferences
                    </h1>
                    <p>
                      Step 2: Customize Your Journey – Adjust Settings for
                      Results with Our Tools!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-bolt w-[50px] h-[50px] md:w-[70px] md:h-[70px] shadow-2xl rounded-full flex items-center justify-center text-2xl text-white">
                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex-1 flex items-center">
                <div className="image-2 shadow-lg h-[280px] md:h-[350px] xl:h-[400px] w-full"></div>
              </div>
            </div>
          </FramerDiv>
          <FramerDiv delay={0.25}>
            <div className=" w-full flex-col-reverse lg:flex-row h-full flex items-center justify-center">
              <div className="lg:flex-1 relative z-50 h-[150px] md:h-[220px] w-full lg:h-full">
                <div className="w-[85%] sm:w-[75%] lg:w-[85%] xl:w-[70%] flex-col-reverse lg:flex-row bg-white flex items-center justify-between py-6 lg:py-10 px-3 shadow-xl rounded-2xl absolute z-50 left-[50%] gap-5 lg:gap-0 -top-16 -translate-x-[50%] lg:-right-16 lg:top-[50%] lg:-translate-y-[50%] lg:-translate-x-0">
                  <div className=" lg:w-[85%] xl:w-[70%] px-5">
                    <h1 className="text-2xl font-semibold text-left">
                      See the Transformation
                    </h1>
                    <p>
                      Step 3: Instant Joy – See the Transformation with Your
                      Optimized Content Quickly and Effortlessly!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-bolt w-[50px] h-[50px] md:w-[70px] md:h-[70px] shadow-2xl rounded-full flex items-center justify-center text-2xl text-white">
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex-1 flex items-center">
                <div className="image-3 shadow-lg h-[280px] md:h-[350px] xl:h-[400px] w-full"></div>
              </div>
            </div>
          </FramerDiv>
        </div>
        {/* </FramerDiv> */}
      </div>
    </div>
  );
};

export default HowItWorks;
