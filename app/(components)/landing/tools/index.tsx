import Link from "next/link";
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
        <div className="service-cards-containers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center  w-full md:w-[90%] xl:w-[80%] justify-center mx-auto py-5 relative">
          <div className="bg-water w-[100px] h-[100px] rounded-full  border-[6px] bottom-[0px]  border-baby-blue -left-[50px] absolute z-10"></div>
          <Link
            href={"/compress"}
            className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
          >
            {/* <FramerDiv delay={0.25}> */}
            <Image
              src={"/assests/index/icons/compress.png"}
              alt="compressor"
              width={55}
              height={50}
            />
            {/* </FramerDiv> */}
            <h1 className="text-xl font-semibold">Compress Image</h1>
            <p className="text-center">
              Optimize Your Visuals: Effortless Image Compression
            </p>
          </Link>
          <Link
            href={"/conversion"}
            className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
          >
            {/* <FramerDiv delay={0.25}> */}
            <Image
              src={"/assests/index/icons/format.png"}
              alt="compressor"
              width={50}
              height={50}
            />
            {/* </FramerDiv> */}
            <h1 className="text-xl font-semibold">Transform Image Format</h1>
            <p className="text-center">
              Versatile Image Transformation: Convert Formats Seamlessly
            </p>
          </Link>
          <Link
            href={"/image-to-pdf"}
            className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
          >
            {/* <FramerDiv delay={0.25}> */}
            <Image
              src={"/assests/index/icons/image-to-pdf.png"}
              alt="compressor"
              width={70}
              height={70}
            />
            {/* </FramerDiv> */}
            <h1 className="text-xl font-semibold">Image to PDF</h1>
            <p className="text-center">
              Instantly Convert Images to PDF. A Quick and Free Solution
            </p>
          </Link>
          <Link
            href={"/merge-pdf"}
            className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
          >
            {/* <FramerDiv delay={0.25}> */}
            <Image
              src={"/assests/index/icons/merge.png"}
              alt="compressor"
              width={65}
              height={50}
            />
            {/* </FramerDiv> */}
            <h1 className="text-xl font-semibold">Merge PDF</h1>
            <p className="text-center">
              Unify Your Documents: Merge PDFs with Ease.
            </p>
          </Link>
          <Link
            href={"/split-pdf"}
            className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
          >
            {/* <FramerDiv delay={0.25}> */}
            <Image
              src={"/assests/index/icons/split.png"}
              alt="compressor"
              width={65}
              height={50}
            />
            {/* </FramerDiv> */}
            <h1 className="text-xl font-semibold">Split PDF</h1>
            <p className="text-center">
              Precision at Your Fingertips: Split PDFs with Ease
            </p>
          </Link>
          <Link
            href={"/remove-pages"}
            className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
          >
            {/* <FramerDiv delay={0.25}> */}
            <Image
              src={"/assests/index/icons/remove-pages.png"}
              alt="compressor"
              width={55}
              height={50}
            />
            {/* </FramerDiv> */}
            <h1 className="text-xl font-semibold">Remove Pages</h1>
            <p className="text-center">
              Refine Your Content: Easily Remove Pages from PDF
            </p>
          </Link>
          <Link
            href={"/extract-pages"}
            className="flex gap-3 bg-white flex-col items-center shadow-sm hover:shadow-md transition-all justify-center w-full h-[250px] mx-auto text-center rounded cursor-pointer text-slate-800 z-20 p-7"
          >
            {/* <FramerDiv delay={0.25}> */}
            <Image
              src={"/assests/index/icons/extract-pages.png"}
              alt="compressor"
              width={50}
              height={50}
            />
            {/* </FramerDiv> */}
            <h1 className="text-xl font-semibold">Extract Pages</h1>
            <p className="text-center">
              Precision Extraction: Retrieve Specific Pages with Our PDF Tool
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolSection;
