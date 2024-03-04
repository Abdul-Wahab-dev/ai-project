import MoreTools from "@/app/(components)/moreTools";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Extract Pages",
  description:
    "Precision Extraction: Retrieve Specific Pages with Our PDF Tool",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      {/* Compress Section */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></Script>
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Extract Pages</h1>
            <p className="text-black text-center">
              Precision Extraction: Retrieve Specific Pages with Our PDF Tool{" "}
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <div className="bg-white w-full h-full py-10 px-3">
          <div className="custom_container mx-auto h-full px-3 py-10 text-black">
            <div className="pb-5 border-b">
              <h2 className="text-xl font-semibold uppercase">
                How to extract pages:
              </h2>
              <ul>
                <li>
                  <p className="text-lg">1. Upload your file.</p>
                </li>
                <li>
                  <p className="text-lg">
                    2. Enter the Page You Want To Extract.
                  </p>
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
                  EXTRACT PAGES ONLINE - FREE AND CONVINENT
                </h2>
                <p className="uppercase text-lg text-center">
                  PRECISION EXTRACTION: RETRIEVE SPECIFIC PAGES WITH OUR PDF
                  TOOL
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-20 gap-y-10 items-start">
                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Quick Guide to Extract Pages
                  </h3>
                  <p className="text-justify">
                    Uploading your file is simple and convenient, offering you
                    two easy methods to get started: Simply drag and drop or
                    browse your hard drive
                  </p>
                  <p className="text-justify">
                    Once you uploaded the image, you can enter the No. of pages
                    you want to extract.
                  </p>
                  <p className="text-justify">
                    Click the "Extract Pages" button to begin the process. Once
                    complete, you'll be able to preview the optimized image and
                    download it
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Why Do We Need To Extract Pages?
                  </h3>
                  <p className="text-justify">
                    If you need to edit or modify specific pages of a PDF
                    document, you may want to extract those pages.
                  </p>
                  <p className="text-justify">
                    This is particularly useful when you only need to work on
                    certain sections of a larger document.So You can Extract
                    those pages here.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Archiving Purposes
                  </h3>

                  <p className="text-justify">
                    In some cases, you may want to archive specific sections or
                    pages of a document..This Tool allows you to extract and
                    create files of certain pages.so you can archive them.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Cost and Time - Saving
                  </h3>
                  <p className="text-justify">
                    Instead of editing a lengthy document, you can extract only
                    the desired page. This Tool saves your time by allowing you
                    to concentrate on specific section.
                  </p>
                  <p className="text-justify">
                    If you need to print only certain section of a document,
                    extracting those pages can significantly reduce printing
                    costs by eliminating the need to print the whole document.
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
        <MoreTools url="extract" />
      </div>
    </div>
  );
}

export default Layout;
