import { Metadata } from "next";
import MoreTools from "@/app/(components)/moreTools";

export const metadata: Metadata = {
  title: "Transform Image Format",
  description: "Versatile Image Transformation: Convert Formats Seamlessly",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">
              {" "}
              Transform Image Format
            </h1>
            <p className="text-black text-center">
              Versatile Image Transformation: Convert Formats Seamlessly
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <div className="bg-white w-full h-full py-10 px-3">
          <div className="custom_container mx-auto h-full px-3 py-10 text-black">
            <div className="pb-5 border-b">
              <h2 className="text-2xl font-semibold uppercase">
                You can transform image format by following steps:
              </h2>
              <ul>
                <li>
                  <p className="text-lg">1. Upload your image.</p>
                </li>
                <li>
                  <p className="text-lg">2. Select the Format.</p>
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
                  Transform Image Format Online - Free and Convenient
                </h2>
                <p className="uppercase text-lg text-center">
                  Transform the image Format Without Compromising Quality in
                  Just a Few Clicks
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
                    Once you uploaded the image, then set the format you wanted.
                  </p>
                  <p className="text-justify">
                    Click the "Convert image" button to begin the Transformation
                    process. Once complete, you'll be able to preview the
                    trasnformed format image and download it to your computer
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Why Do We Need To Transform Image Format?
                  </h3>
                  <p className="text-justify">
                    Different devices and softwares support different image
                    formats. Transformed images can be viewed and manipulated
                    across various platforms without compatibility issues.
                  </p>
                  <p className="text-justify">
                    Some efficient image formats preserve their quality while
                    sharing. Certain formats support specific features. For
                    example, PNG supports transparency, while JPEG support image
                    compression.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Maintained Image Quality
                  </h3>
                  <p className="text-justify">
                    Toolefy maintains your image Quality while transforming it.
                    Color sharpness, and Transperacy are the factors which
                    determines the image Quality.
                  </p>
                  <p className="text-justify">
                    Toolefy maintaines these Factors while transforming your
                    image.
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
                    in its database.Toolefy image transform tool regulates the
                    laws of data protection.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Cost and Time - Saving
                  </h3>
                  <p className="text-justify">
                    You can enjoy your desired image Format by just a few
                    clicks.This Tool saves your Time as well as cost.
                  </p>
                  <p className="text-justify">
                    You don't have to go through complicated processes to get
                    your desired format. Just need to upload your image on
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
                    internet connection to compress your image.
                  </p>
                </div>
              </div>
            </div>
            {/* Advantanges */}
          </div>
        </div>
        <MoreTools url="conversion" />
      </div>
    </div>
  );
}

export default Layout;
