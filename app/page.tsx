import Image from "next/image";
import Graph1 from "@/public/assests/index/graph1.png";
import Graph from "@/public/assests/index/graph.png";
export default function Home() {
  return (
    <div>
      {/* Header */}
      <div className="w-full bg-winter-wizard py-4">
        <div className="custom_container mx-auto text-slate-800">
          {/* Logo and links */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4 font-semibold">
              <h2>Logo</h2>
              <ul className="text-lg">
                <li className="cursor-pointer">Tools</li>
              </ul>
            </div>
            <div>
              <ul className="flex justify-center items-center gap-4 text-lg font-semibold">
                <li className="cursor-pointer">Login</li>
                <li className="cursor-pointer">Sign up</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      {/* Hero Section */}
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
                  <div className="w-[17px] h-[17px] bg-baby-blue rounded-full"></div>
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
              <h1 className="text-3xl font-bold text-slate-800 z-20">
                Transform your{" "}
                <span className="text-space-cadet">imagination </span> into a
                story-based learning workbook
              </h1>
              <p className="text-slate-800 text-lg z-20">
                Express your idea in a few words!
              </p>
            </div>

            <div className="flex-1 relative w-full lg:h-full h-[300px] overflow-hidden">
              <div className="bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-0 lg:left-[17%]  moveUpDownPdf z-20">
                <Image
                  src={"/assests/index/icons/pdf.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer  right-[12%] moveUpDownImage z-20">
                <Image
                  src={"/assests/index/icons/image.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer  left-[50%] -translate-x-[50%] moveUpDownText z-20">
                <Image
                  src={"/assests/index/icons/text.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[50%] -translate-x-[50%] moveUpDownAi z-20">
                <Image
                  src={"/assests/index/icons/ai.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[75%] -translate-x-[50%] moveUpDownCompress z-20">
                <Image
                  src={"/assests/index/icons/compress.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[50%] -translate-x-[50%] moveUpDownAi z-20">
                <Image
                  src={"/assests/index/icons/ai.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-center items-center w-auto absolute shadow-md cursor-pointer left-[15%]  moveUpDownSummary z-20">
                <Image
                  src={"/assests/index/icons/summary.png"}
                  width={50}
                  height={60}
                  alt="ai-icon"
                  className="md:w-[50px]  w-[40px]"
                />
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
      {/* Hero Section */}
      {/* Services Section */}
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
              <p className="text-slate-800 text-lg">
                Try our cutting-edge tools
              </p>
            </div>
          </div>
          <div className="service-cards-containers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center  w-full md:w-[90%] xl:w-[80%] justify-center mx-auto py-5 relative">
            <div className="bg-water w-[100px] h-[100px] rounded-full  border-[6px] bottom-[0px]  border-baby-blue -left-[50px] absolute z-10"></div>
            <div className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7">
              <Image
                src={"/assests/index/icons/compress.png"}
                alt="compressor"
                width={45}
                height={50}
              />
              <h1 className="text-xl font-semibold">Compress Image</h1>
              <p className="text-center">
                Shrink Image File Sizes with High-Quality Image Compression
              </p>
            </div>
            <div className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7">
              <Image
                src={"/assests/index/icons/format.png"}
                alt="compressor"
                width={60}
                height={70}
              />
              <h1 className="text-xl font-semibold">Transform Image Format</h1>
              <p className="text-center">Efficiently Modify Image File Types</p>
            </div>
            <div className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7">
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
            <div className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7">
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
            <div className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7">
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
            <div className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7">
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
        </div>
      </div>
      {/* Service Section */}

      {/* Result Section */}
      <div className="w-full bg-white py-10 relative overflow-hidden">
        <div className="bg-white w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -left-[100px] absolute z-10"></div>
        {/* <div className="bg-baby-blue w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -right-[100px] absolute z-10"></div> */}

        <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt bottom-10 left-[60%] z-10"></div>

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
      </div>
      {/* Service Section */}
      {/* Let's build  */}
      <div className="w-full bg-white py-10 relative overflow-hidden">
        {/* <div className="bg-baby-blue w-[200px] h-[200px] rounded-full  border-[15px] -bottom-[100px]  border-baby-blue -right-[100px] absolute z-10"></div> */}

        {/* <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt bottom-10 left-[60%] z-10"></div> */}

        <div className="custom_container mx-auto h-full  bg-winter-wizard z-50 rounded-md shadow-lg">
          <div className="flex  items-center flex-col lg:flex-row">
            <div className="flex-1 h-full flex items-center p-10 relative">
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
                    <div className="w-[15px] h-[15px] bg-baby-blue rounded-full"></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((el) => (
                    <div className="w-[15px] h-[15px] bg-baby-blue rounded-full"></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {[1, 2].map((el) => (
                    <div className="w-[15px] h-[15px] bg-baby-blue rounded-full"></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {[1].map((el) => (
                    <div className="w-[15px] h-[15px] bg-baby-blue rounded-full"></div>
                  ))}
                </div>
              </div>
              <div className=" py-5 w-full">
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
            <div className="flex-1 flex items-center justify-center h-full relative overflow-hidden">
              <div className="py-10 bg-transparent w-[600px] h-[600px] rounded-full z-10 top-[50%] -translate-y-[50%] -right-[35%] absolute border-baby-blue border-2 flex items-center justify-center">
                <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt left-[50px] bottom-[100px] z-10"></div>
                <div className="w-[25px] h-[25px] shadow-[3px_10px_10px_rgb(0,169,255,0.4)] rounded-full absolute bg-blue-bolt left-[50px] top-[100px] z-10"></div>
                <div className="bg-transparent w-[550px] h-[550px] rounded-full z-20  border-baby-blue border-2 flex items-center justify-center">
                  <div className="bg-baby-blue-500 w-[500px] h-[500px] rounded-full z-20 flex items-center justify-center">
                    <div className="bg-baby-blue-700 w-[450px] h-[450px] rounded-full z-30 flex items-center justify-center">
                      <div className="bg-baby-blue w-[400px] h-[400px] rounded-full z-30"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notebook-page-container px-2 py-auto  flex h-[450px] w-[100%] relative">
                <div className="w-[230px] h-[290px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-5 absolute z-50 left-[30%] top-[50%] -translate-y-[50%]">
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
                <div className="w-[230px] h-[280px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-5 absolute z-40 -rotate-[25deg] left-[20%] top-[50%] -translate-y-[50%] ">
                  {[1, 2, 3, 4, 5].map((el) => (
                    <div
                      key={el}
                      className="check-section flex gap-3 items-center w-full"
                    >
                      {/* <div className="checkbox-container">
                        <div className="checkbox bg-transparent border-[2px] border-Platinum rounded w-[25px] h-[25px] flex items-center justify-center">
                          <span className="text-Platinum text-lg font-semibold">
                            &#10003;
                          </span>
                        </div>
                      </div> */}
                      <div className="content w-[70%] flex flex-col gap-[5px]">
                        <div className="bg-Platinum w-[60%] h-[5px] rounded-sm"></div>
                        <div className="bg-Platinum w-[100%] h-[5px] rounded-sm"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <Image
                src={"/assests/index/feature.svg"}
                alt="let-build"
                width={400}
                height={100}
                className="z-10"
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Let's build  */}
      {/* Footer */}
      <div className="w-full bg-water p-10 relative overflow-hidden">
        <div className="custom_container mx-auto">
          <div
            className="flex justify-between text-slate-800
          "
          >
            <div className="logo-section w-[30%]">
              <h1>LOGO</h1>
              <div className="w-[70%]">
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicia asjdai
                  doiajdn aois9ad iaocpa?
                </p>
              </div>
            </div>
            <div className="links-section  flex gap-24 items-start justify-center flex-auto">
              <div className="flex gap-5">
                <div>
                  <h4 className="text-lg font-bold mb-5">Company</h4>
                  <ul className="flex flex-col">
                    <li> About</li>
                    <li> Contact us</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <h4 className="text-lg font-bold mb-5">Useful links</h4>
                  <ul className="flex flex-col">
                    <li> About</li>
                    <li> About</li>
                    <li> About</li>
                    <li> About</li>
                    <li> About</li>
                    <li> Contact us</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <h4 className="text-lg font-bold mb-5">Legal</h4>
                  <ul className="flex flex-col">
                    <li> About</li>
                    <li> Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
}
