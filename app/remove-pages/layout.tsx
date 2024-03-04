import MoreTools from "@/app/(components)/moreTools";

import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Remove Pages",
  description: "Unify Your Documents: Merge PDFs with Ease.",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></Script>
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Remove Pages</h1>
            <p className="text-black text-center">
              Refine Your Content: Easily Remove Pages from PDF
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <div className="bg-white w-full h-full py-10 px-3">
          <div className="custom_container mx-auto h-full px-3 py-10 text-black">
            <div className="pb-5 border-b">
              <h2 className="text-xl font-semibold uppercase">
                How to remove pages:
              </h2>
              <ul>
                <li>
                  <p className="text-lg">1. Upload your file.</p>
                </li>
                <li>
                  <p className="text-lg">
                    2. Enter No. of pages you wanted to remove.
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
                  Remove Pages ONLINE - FREE AND EFFICIENT
                </h2>
                <p className="uppercase text-lg text-center">
                  REMOVE YOUR PAGES EFFICIENTLY WITH NO TIME
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-20 gap-y-10 items-start">
                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Quick Guide To Remove Pages
                  </h3>
                  <p className="text-justify">
                    Uploading your file is simple and convenient, offering you
                    two easy methods to get started: Simply drag and drop or
                    browse your hard drive
                  </p>
                  <p className="text-justify">
                    Once you uploaded the image, you can enter the no. of pages
                    you wanted to remove.
                  </p>
                  <p className="text-justify">
                    Click the "Remove Pages" button to begin the process. Once
                    complete, you'll be able to preview the optimized image and
                    download it
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Why Do We need to Remove Pages?
                  </h3>
                  <p className="text-justify">
                    Sometimes, document may contain pages that are irrelevant or
                    unnecessary. Toolefy Remove these pages to make your content
                    relevant.
                  </p>
                  <p className="text-justify">
                    This is particularly useful when you only need to work on
                    certain sections of a larger document. So you can remove
                    irrelevent pages here.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Optimization of Compliance
                  </h3>
                  <p className="text-justify">
                    Certain regulations may require the removal of specific
                    pages from documents. Toolefy remove pages from your file to
                    make it Relevant.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Maintenance of Privacy
                  </h3>

                  <p className="text-justify">
                    Sometimes you want to extract specific pages from a document
                    for privacy concerns.That is sensitive to share.Toolefy
                    removes such pages to make your file safe to share
                  </p>
                  <p className="text-justify">
                    Security is an important concern while handling sensitive
                    content.Feel free to use this tool. No privacy concerns
                    associated with your images.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Cost and Time - Saving
                  </h3>
                  <p className="text-justify">
                    Managing documents with unnecessary pages can be
                    time-consuming. Toolefy removes these pages which simplfies
                    managing processes, making it easier to organize, archive,
                    and retrieve files
                  </p>
                  <p className="text-justify">
                    When irrelevant pages are removed from a file, it takes less
                    time for users to open, load, and navigate a document.This
                    reduces waiting time and improves overall efficiency.
                    Printing unnecessary pages
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
        <MoreTools url="remove-pages" />
      </div>
    </div>
  );
}

export default Layout;
