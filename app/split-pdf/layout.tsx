import MoreTools from "@/app/(components)/moreTools";

import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Split PDF",
  description: "Precision at Your Fingertips: Split PDFs with Ease",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></Script>
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Split PDF</h1>
            <p className="text-black text-center">
              Precision at Your Fingertips: Split PDFs with Ease
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <div className="bg-white w-full h-full py-10 px-3">
          <div className="custom_container mx-auto h-full px-3 py-10 text-black">
            <div className="pb-5 border-b">
              <h2 className="text-xl font-semibold uppercase">
                How tO split PDF:
              </h2>
              <ul>
                <li>
                  <p className="text-lg">1. Upload your files.</p>
                </li>
                <li>
                  <p className="text-lg">2. Merge PDFs.</p>
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
                  SPLIT PDF ONLINE - FREE AND CONVENIENT
                </h2>
                <p className="uppercase text-lg text-center">
                  Split pdf IN JUST A FEW CLICKS
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-14 xl:gap-x-20 gap-y-10 items-start">
                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    QuicK Guide To Split PDF
                  </h3>
                  <p className="text-justify">
                    Uploading your file is simple and convenient, offering you
                    two easy methods to get started: Simply drag and drop or
                    browse your hard drive
                  </p>
                  <p className="text-justify">
                    Once you uploaded the files, Select No. of pages you want to
                    split and separate
                  </p>
                  <p className="text-justify">
                    Click the "Split PDF" button to begin the process.Once
                    complete, you'll be able to download it to your computer
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Why Do We Need To Split PDF?
                  </h3>
                  <p className="text-justify">
                    Sometimes you only need certain pages from a large PDF File.
                    Splitting allows you to extract your desired pages.
                  </p>
                  <p className="text-justify">
                    This is useful to share or archive specific
                    information.Splitting a large PDF into a smaller file can
                    help reduce file size, making it easier to manage and share.
                  </p>
                  <p className="text-justify">
                    Sometimes certain pages of a PDF document may contain
                    sensitive information that should not be shared with all
                    recipients. Splitting allows you to separate sensitive
                    content while sharing.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Optimized Workflow Efficiency
                  </h3>
                  <p className="text-justify">
                    When Toolefy Split your large PDF file, the segments become
                    more manageable.it can optimize workflow efficiency.
                  </p>
                  <p className="text-justify">
                    You can work on individual sections concurrently,
                    facilitating parallel processing and accelerating overall
                    task completion times.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Secure File Splitting
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
                    When PDF files are split into smaller, more focused
                    segments, users can quickly access the specific information
                    and this reduces the time spent to search for information
                    within a large document.
                  </p>
                  <p className="text-justify">
                    Working with smaller PDF files generally requires less
                    processing time, especially when opening, viewing, printing,
                    or editing.
                  </p>
                  <p className="text-justify">
                    Splitted PDF files can help to manage storage costs by
                    reducing the amount of storage. Smaller file sizes consume
                    less disk space.
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
        <MoreTools url="split-pdf" />
      </div>
    </div>
  );
}

export default Layout;
