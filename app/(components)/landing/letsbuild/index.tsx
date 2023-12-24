import Image from "next/image";
import FramerDiv from "@/app/(components)/framermotion/divblock";
const BuildSection = () => {
  return (
    <div className="w-full bg-white py-10 relative overflow-hidden">
      {/* <div className="bg-baby-blue w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -right-[100px] absolute z-10"></div> */}

      {/* <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt bottom-10 left-[60%] z-10"></div> */}

      <div className="custom_container mx-auto h-full  bg-winter-wizard z-50 rounded-md shadow-lg">
        <FramerDiv delay={0.25}>
          <div className="flex  items-center flex-col lg:flex-row">
            <div className="flex-1 h-full flex items-center p-4 md:p-10 relative">
              <div className="absolute bottom-[10%] rotate-[180] right-0 ">
                <div
                  className="w-[100px] h-[100px] bg-transparent rounded-full flex justify-center items-center border-blue-bolt"
                  style={{
                    borderTop: "11px solid #00A9FF",
                    borderLeft: "11px solid #00A9FF",
                    borderRight: "11px solid transparent",
                    borderBottom: "11px solid transparent",
                  }}
                >
                  <div className="w-[60px] h-[60px]   bg-baby-blue rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-8 left-4 flex flex-col justify-center gap-2 items-start w-[160px] h-[160px]  z-10">
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((el) => (
                    <div
                      key={el}
                      className="w-[15px] h-[15px] bg-baby-blue rounded-full"
                    ></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((el) => (
                    <div
                      key={el}
                      className="w-[15px] h-[15px] bg-baby-blue rounded-full"
                    ></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {[1, 2].map((el) => (
                    <div
                      key={el}
                      className="w-[15px] h-[15px] bg-baby-blue rounded-full"
                    ></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {[1].map((el) => (
                    <div
                      key={el}
                      className="w-[15px] h-[15px] bg-baby-blue rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className=" py-5 w-full z-50">
                <div className="flex  flex-col gap-5">
                  <h1 className="text-3xl font-bold text-slate-800 z-50">
                    Let's Create AI-Powered Content With A Single Click
                  </h1>
                  <p className="text-slate-800 text-lg ">
                    To create powerful content, you need to know who you're
                    targeting. Identify your target audience and understand
                    their needs, interests, and pain points.
                  </p>
                  <ul>
                    <li>
                      <p className="text-slate-800 text-lg ">
                        Start creating powerful content, for your next ads
                      </p>
                    </li>
                    <li>
                      <p className="text-slate-800 text-lg ">
                        Start creating powerful content, for your next ads
                      </p>
                    </li>
                    <li>
                      <p className="text-slate-800 text-lg ">
                        Start creating powerful content, for your next ads
                      </p>
                    </li>
                    <li>
                      <p className="text-slate-800 text-lg ">
                        Start creating powerful content, for your next ads
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative overflow-hidden">
              <div className="py-10 bg-transparent w-[380px] lg:w-[600px] h-[380px] lg:h-[600px] rounded-full z-10 lg:top-[50%] lg:-translate-y-[50%] right-[50%]  translate-x-[50%] lg:translate-x-[-10%] lg:-right-[50%] absolute border-baby-blue border-2 flex items-center justify-center">
                <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt left-[35px] lg:left-[50px] bottom-[100px] z-50"></div>
                <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt left-[35px] lg:left-[50px] top-[100px] z-50"></div>
                <div className="bg-transparent w-[330px] lg:w-[550px] h-[330px] lg:h-[550px] rounded-full z-20  border-baby-blue border-2 flex items-center justify-center">
                  <div className="bg-baby-blue-500 w-[280px] lg:w-[500px] h-[280px] lg:h-[500px] rounded-full z-20 flex items-center justify-center">
                    <div className="bg-baby-blue-700 w-[230px] lg:w-[450px] h-[230px] lg:h-[450px] rounded-full z-30 flex items-center justify-center">
                      <div className="bg-baby-blue w-[180px] h-[180px] lg:w-[400px] lg:h-[400px] rounded-full z-30"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notebook-page-container px-2 py-auto  flex h-[450px] w-[100%] relative">
                <div className="w-[170px] lg:w-[230px] h-[230px] lg:h-[290px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-5 absolute z-50 top-[50%] left-[50%] -translate-x-[50%] lg:-translate-x-[30%] -translate-y-[50%] lg:left-[30%] lg:top-[50%] lg:-translate-y-[50%]">
                  <div className="flex gap-5">
                    {" "}
                    <div className="bg-white shadow-lg w-[40px] h-[40px] flex items-center justify-center rounded">
                      <Image
                        src={"/assests/index/icons/image-icon.png"}
                        alt="compressor"
                        width={30}
                        height={70}
                      />
                    </div>
                    <div className="bg-white shadow-lg w-[40px] h-[40px] flex items-center justify-center rounded">
                      <Image
                        src={"/assests/index/icons/image-icon.png"}
                        alt="compressor"
                        width={30}
                        height={70}
                      />
                    </div>
                    <div className="bg-white shadow-lg w-[40px] h-[40px] flex items-center justify-center rounded">
                      <Image
                        src={"/assests/index/icons/image-icon.png"}
                        alt="compressor"
                        width={30}
                        height={70}
                      />
                    </div>
                  </div>
                  {[1, 2, 3].map((el) => (
                    <div
                      key={el}
                      className="check-section flex gap-3 items-center w-full"
                    >
                      <div className="checkbox-container">
                        <div className="checkbox bg-transparent border-[2px] border-Platinum rounded w-[25px] h-[25px] flex items-center justify-center">
                          <span className="text-Platinum text-lg font-semibold">
                            &#10003;
                          </span>
                        </div>
                      </div>
                      <div className="content w-[70%] flex flex-col gap-[5px]">
                        <div className="bg-Platinum w-[60%] h-[5px] rounded-sm"></div>
                        <div className="bg-Platinum w-[100%] h-[5px] rounded-sm"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" w-[170px] lg:w-[230px]  h-[220px] lg:h-[280px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-5 absolute z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] -rotate-[25deg] lg:left-[20%] lg:top-[50%] lg:-translate-x-[20%] lg:-translate-y-[50%] ">
                  {[1, 2, 3, 4, 5].map((el) => (
                    <div
                      key={el}
                      className="check-section flex gap-3 items-center w-full"
                    >
                      <div className="content w-[70%] flex flex-col gap-[5px]">
                        <div className="bg-Platinum w-[60%] h-[5px] rounded-sm"></div>
                        <div className="bg-Platinum w-[100%] h-[5px] rounded-sm"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FramerDiv>
      </div>
    </div>
  );
};

export default BuildSection;
