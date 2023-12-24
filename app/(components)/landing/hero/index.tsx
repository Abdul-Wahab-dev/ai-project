import React from "react";
import Heading from "@/app/(components)/framermotion/heading";
import Image from "next/image";
import Paragraph from "@/app/(components)/framermotion/paragraph";
import Graph from "@/public/assests/index/graph.png";
import FramerImage from "@/app/(components)/framermotion/image";
const HeroSection = () => {
  return (
    <div className="w-full bg-winter-wizard  lg:h-[80vh] overflow-hidden">
      <div className="custom_container mx-auto h-full">
        <div className="block lg:flex justify-between items-center lg:h-full flex-col lg:flex-row">
          <div className="flex-1 flex flex-col gap-5 relative h-[250px] lg:h-full justify-center">
            <div className="w-[100px] h-[100px] top-[50%]    absolute rounded-full border-4 border-baby-blue bg-winter-wizard z-10"></div>

            <div className="absolute bottom-[20%] left-[50%]  grid grid-cols-5 justify-center items-center w-[160px] h-[160px] gap-0 rotate-45 z-10">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25,
              ].map((el) => (
                <div
                  key={el}
                  className="w-[17px] h-[17px] bg-baby-blue rounded-full"
                ></div>
              ))}
            </div>
            <div className="absolute top-[10%] rotate-[180] right-0 lg:right-[20%]">
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
            <div className="z-50">
              <Heading
                classes={"text-3xl font-bold text-slate-800 z-20"}
                delay={0.25}
              >
                Transform your{" "}
                <span className="text-space-cadet">imagination </span> into a
                story-based learning workbook
              </Heading>
              <Paragraph classes="text-slate-800 text-lg z-20" delay={0.5}>
                Express your idea in a few words!{" "}
              </Paragraph>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:h-full h-[300px] overflow-hidden">
            <div className="overflow-hidden bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-0 lg:left-[17%]  moveUpDownPdf z-20">
              <FramerImage delay={0.25}>
                <Image
                  src={"/assests/index/icons/pdf.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </FramerImage>
            </div>

            <div className="overflow-hidden bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer  right-[12%] moveUpDownImage z-20">
              <FramerImage delay={0.25}>
                <Image
                  src={"/assests/index/icons/image.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </FramerImage>
            </div>
            <div className="overflow-hidden bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer  left-[50%] -translate-x-[50%] moveUpDownText z-20">
              <FramerImage delay={0.25}>
                <Image
                  src={"/assests/index/icons/text.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </FramerImage>
            </div>
            <div className="overflow-hidden bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[50%] -translate-x-[50%] moveUpDownAi z-20">
              <FramerImage delay={0.25}>
                <Image
                  src={"/assests/index/icons/ai.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </FramerImage>
            </div>
            <div className="overflow-hidden bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[75%] -translate-x-[50%] moveUpDownCompress z-20">
              <FramerImage delay={0.25}>
                <Image
                  src={"/assests/index/icons/compress.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </FramerImage>
            </div>
            <div className="overflow-hidden bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[50%] -translate-x-[50%] moveUpDownAi z-20">
              <FramerImage delay={0.25}>
                <Image
                  src={"/assests/index/icons/ai.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </FramerImage>
            </div>
            <div className="overflow-hidden bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[15%]  moveUpDownSummary z-20">
              <FramerImage delay={0.25}>
                <Image
                  src={"/assests/index/icons/summary.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </FramerImage>
            </div>
            <Image
              src={Graph}
              width={500}
              height={200}
              alt="graph"
              className="absolute left-[50%] -translate-x-[50%] top-0 rotate-90"
            />
            {/* <Image
            src={Graph}
            width={500}
            height={200}
            alt="graph"
            className="absolute left-[65%] -translate-x-[50%] -rotate-90 top-[60%] -translate-y-[50%]"
          /> */}
            {/* <div className="lg:w-[300px] sm:w-[240px] sm:h-[240px] lg:h-[300px] top-[50%] left-[60%] -translate-x-[50%] -translate-y-[50%] absolute rounded-full border-2 border-baby-blue bg-winter-wizard z-10"></div> */}
            {/* <div className="w-[100px] h-[100px] -bottom-10 right-0  absolute rounded-full border-2 border-baby-blue bg-winter-wizard z-10"></div> */}
            {/* <div className="lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[200px] top-[50%] left-[60%] -translate-x-[50%] -translate-y-[50%] absolute rounded-full bg-baby-blue z-10"></div> */}
            <div className="w-[100px] h-[100px] top-[50%]   -translate-y-[50%]  absolute rounded-full border-2 border-baby-blue bg-winter-wizard z-10"></div>
            {/* <div className="w-[150px] h-[150px] top-[60%] left-[40%] -translate-x-[60%] -translate-y-[50%] absolute rounded-full bg-baby-blue z-10"></div> */}
            {/* <div className="w-[70px] h-[70px] shadow top-[50%] left-[10%] -translate-x-[70%] -translate-y-[50%] absolute rounded-full bg-baby-blue z-10"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
