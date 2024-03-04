import MoreTools from "@/app/(components)/moreTools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to PDF",
  description: "Instantly Convert Images to PDF. A Quick and Free Solution",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Image to PDF</h1>
            <p className="text-black text-center">
              Instantly Convert Images to PDF. A Quick and Free Solution
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <div className="bg-white w-full h-full py-10 px-3">
          <div className="custom_container mx-auto h-full px-3 py-10 text-black">
            <div className="pb-5 border-b">
              <h2 className="text-xl font-semibold uppercase">
                You can convert images to PDF by following steps:
              </h2>
              <ul>
                <li>
                  <p className="text-lg">1. Upload your images.</p>
                </li>
                <li>
                  <p className="text-lg">2. Convert to PDF.</p>
                </li>
                <li>
                  <p className="text-lg">3. Download the file.</p>
                </li>
              </ul>
            </div>

            {/* Advantanges */}
            <div className="w-full h-full flex flex-col items-center py-5 gap-5">
              <div className="my-5">
                <h2 className="text-2xl font-semibold uppercase text-center">
                  Change IMAGEs inTO PDF online - Free and Convenient
                </h2>
                <p className="uppercase text-lg text-center">
                  Convert images into PDF with Just a Few Clicks
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-14 xl:gap-x-20 gap-y-10 items-start">
                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Quick Guide to Transform image format
                  </h3>
                  <p className="text-justify">
                    Uploading your file is simple and convenient, offering you
                    two easy methods to get started: Simply drag and drop or
                    browse your hard drive
                  </p>
                  <p className="text-justify">
                    Once you uploaded the images, Click the "Convert PDF" button
                    to begin the Transformation process
                  </p>
                  <p className="text-justify">
                    Once complete, you'll be able to download it to your
                    computer
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Why Do We Convert Images to PDF?
                  </h3>
                  <p className="text-justify">
                    PDF is more sustainable in its quality and layout. PDFs are
                    less suspected of Errors as compared to image formats.
                  </p>
                  <p className="text-justify">
                    PDF is widely used to share documents.PDFs are easier to
                    store, share, messaging and uploading.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Maintained Quality
                  </h3>
                  <p className="text-justify">
                    PDF is the format that retains its quality and layout. PDFs
                    are generally more stable and less prone to alterations as
                    compared to image formats like JPEG or PNG
                  </p>
                  <p className="text-justify">
                    PDF ensures consistency across different devices and
                    platforms.Our Image to PDF Tool maintains the same layout
                    and appearance regardless of the viewing device or software
                    used.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Security
                  </h3>
                  <p className="text-justify">
                    Security is an important concern while handling sensitive
                    content.Feel free to use this tool. No privacy concerns
                    associated with your files.
                  </p>
                  <p className="text-justify">
                    Toolefy prioritizes the visitor's privacy by not storing it
                    in its database.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Cost and Time - Saving
                  </h3>
                  <p className="text-justify">
                    You can get the result by just a few clicks.This Tool saves
                    your Time as well as cost.
                  </p>
                  <p className="text-justify">
                    You don't have to go through complicated processes to get
                    your desired result. Just need to upload your file on
                    Toolefy and Enjoy the results.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Device-Friendly Tool
                  </h3>
                  <p className="text-justify">
                    This tool comforts you to use it from any device either a
                    mobile, PC or laptop. You just need a device with stable
                    internet connection.
                  </p>
                </div>
              </div>
            </div>
            {/* Advantanges */}
          </div>
        </div>
        <MoreTools url="image-to-pdf" />
      </div>
    </div>
  );
}

export default Layout;
