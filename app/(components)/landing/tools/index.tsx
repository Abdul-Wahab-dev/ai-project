import React from "react";
import FramerDiv from "@/app/(components)/framermotion/divblock";
import Image from "next/image";
const ToolSection = () => {
  return (
    <div className="w-full bg-water py-10 relative overflow-hidden">
      <div className="bg-water w-[200px] h-[200px] rounded-full  border-[15px] -top-[100px]  border-baby-blue -left-[100px] absolute z-10"></div>
      <div className="bg-baby-blue w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -right-[100px] absolute z-10"></div>

      <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt left-[60%] z-10"></div>

      <div className="custom_container mx-auto h-full z-20">
        <div className=" py-5 w-full">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold text-slate-800 z-50">
              Our Tools
            </h1>
            <p className="text-slate-800 text-lg">Try our cutting-edge tools</p>
          </div>
        </div>
        <FramerDiv delay={0.25}>
          <div className="service-cards-containers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center  w-full md:w-[90%] xl:w-[80%] justify-center mx-auto py-5 relative">
            <div className="bg-water w-[100px] h-[100px] rounded-full  border-[6px] bottom-[0px]  border-baby-blue -left-[50px] absolute z-10"></div>
            <div
              className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.09 }}
            >
              <Image
                src={"/assests/index/icons/compress.png"}
                alt="compressor"
                width={45}
                height={50}
              />
              <h1 className="text-xl font-semibold">Compress Image</h1>
              <p className="text-center">
                Shrink Image Sizes with High-Quality Image Compression
              </p>
            </div>
            <div
              className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src={"/assests/index/icons/format.png"}
                alt="compressor"
                width={60}
                height={70}
              />
              <h1 className="text-xl font-semibold">Transform Image Format</h1>
              <p className="text-center">Efficiently Modify Image File Types</p>
            </div>
            <div
              className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="flex gap-4">
                <Image
                  src={"/assests/index/icons/image.png"}
                  alt="compressor"
                  width={50}
                  height={30}
                />
                <Image
                  src={"/assests/index/icons/one-way.png"}
                  alt="compressor"
                  width={40}
                  height={100}
                />

                <Image
                  src={"/assests/index/icons/pdf.png"}
                  alt="compressor"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="text-xl font-semibold">Image to PDF</h1>
              <p className="text-center">
                Create PDF Documents from Images with Ease
              </p>
            </div>
            <div
              className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={"/assests/index/icons/summary.png"}
                alt="compressor"
                width={45}
                height={50}
              />
              <h1 className="text-xl font-semibold">Text Summarization</h1>
              <p className="text-center">
                Generate Precise Summaries of Lengthy Texts
              </p>
            </div>
            <div
              className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Image
                src={"/assests/index/icons/text-q.png"}
                alt="compressor"
                width={65}
                height={50}
              />
              <h1 className="text-xl font-semibold">Text-to-Q&A</h1>
              <p className="text-center">
                Instantly Create Q&A from Your Textual Resources
              </p>
            </div>
            <div
              className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src={"/assests/index/icons/delete.png"}
                alt="compressor"
                width={50}
                height={50}
              />
              <h1 className="text-xl font-semibold">Image Eraser for PDF</h1>
              <p className="text-center">
                Extract Images to Obtain Image-Free PDF Documents
              </p>
            </div>
          </div>
        </FramerDiv>
      </div>
    </div>
  );
};

export default ToolSection;
