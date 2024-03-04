import { Metadata } from "next";
import MoreTools from "@/app/(components)/moreTools";

export const metadata: Metadata = {
  title: "Compress Image",
  description: "Optimize Your Visuals: Effortless Image Compression",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Compress Image</h1>
            <p className="text-black text-center">
              Optimize Your Visuals: Effortless Image Compression
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <div className="bg-white w-full h-full py-10 px-3">
          <div className="custom_container mx-auto h-full px-3 py-10 text-black">
            <div className="pb-5 border-b">
              <h2 className="text-xl font-semibold uppercase">
                How to compress a image
              </h2>
              <ul>
                <li>
                  <p className="text-lg">1. Upload your image.</p>
                </li>
                <li>
                  <p className="text-lg">2. Select the compression level.</p>
                </li>
                <li>
                  <p className="text-lg">3. Download the image.</p>
                </li>
              </ul>
            </div>

            {/* Advantanges */}
            <div className="w-full h-full flex flex-col items-center py-5 gap-5">
              <div className="my-5">
                <h2 className="text-2xl font-semibold uppercase text-center">
                  Compress images Online - Free and Convenient
                </h2>
                <p className="uppercase text-lg text-center">
                  Reduce Image Size Without Compromising Quality in Just a Few
                  Clicks
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-20 gap-y-10 items-start">
                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Quick Guide to Compress Image
                  </h3>
                  <p className="text-justify">
                    Uploading your file is simple and convenient, offering you
                    two easy methods to get started: Simply drag and drop or
                    browse your hard drive
                  </p>
                  <p className="text-justify">
                    Once you uploaded the image, you can adjust the compression
                    level to get your desired result.
                  </p>
                  <p className="text-justify">
                    Click the "Compress image" button to begin the optimization
                    process. Once complete, you'll be able to preview the
                    optimized image and download it to your computer
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Why Do We Need Image Compression?
                  </h3>
                  <p className="text-justify">
                    Compressed images are easy to share on apps and social media
                    plateformes. Users may share images on their networks more
                    easily when images are smaller.
                  </p>
                  <p className="text-justify">
                    Compressed images support faster uploads and
                    downloads.Compressed images take less storage space on
                    servers and in devices.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Maintained Image Quality
                  </h3>
                  <p className="text-justify">
                    Toolify employs intelligent compression techniques to
                    maintain the quality of images, making them suitable for
                    various applications while retaining their integrity.
                  </p>
                  <p className="text-justify">
                    Enjoy smaller file sizes without compromising on image
                    sharpness or color accuracy.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Secure Image Compression
                  </h3>
                  <p className="text-justify">
                    Security is an important concern while handling sensitive
                    content.Feel free to use this tool. No privacy concerns
                    associated with your images.
                  </p>
                  <p className="text-justify">
                    Toolefy prioritizes the visitor's privacy by not storing it
                    in its database.Toolefy image compressor regulates the laws
                    of data protection.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Cost and Time - Saving
                  </h3>
                  <p className="text-justify">
                    With just a few clicks, you can reduce the size of your
                    images without compromising quality, making them perfect for
                    websites, social media, and more
                  </p>
                  <p className="text-justify">
                    Our image compressor is completely free to use.Enjoy the
                    benefits of optimized images without spending a dime
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Device-Friendly Tool
                  </h3>
                  <p className="text-justify">
                    This tool comforts you to use it from any device either a
                    mobile, PC or laptop. You just need a device with stable
                    internet connection to compress your image.
                  </p>
                </div>
              </div>
            </div>
            {/* Advantanges */}
          </div>
        </div>
        <MoreTools url="compress" />
      </div>
    </div>
  );
}

export default Layout;
