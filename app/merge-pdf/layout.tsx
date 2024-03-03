import MoreTools from "@/app/(components)/moreTools";

import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Merge PDFs",
  description: "Unify Your Documents: Merge PDFs with Ease.",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></Script>
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Merge PDFs</h1>
            <p className="text-black text-center">
              Unify Your Documents: Merge PDFs with Ease.
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
                  MERGE PDFs FREE ONLINE- EASY AND CONVENIENT
                </h2>
                <p className="uppercase text-lg text-center">
                  Combine multiple PDFs IN JUST A FEW CLICKS
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-14 xl:gap-x-20 gap-y-10 items-start">
                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Quick Guide to Merge PDFs
                  </h3>
                  <p className="text-justify">
                    Uploading your file is simple and convenient, offering you
                    two easy methods to get started: Simply drag and drop or
                    browse your hard drive
                  </p>
                  <p className="text-justify">
                    Once you uploaded the files, Click the "Merge PDF" button to
                    begin the process
                  </p>
                  <p className="text-justify">
                    Once complete, you'll be able to download it to your
                    computer
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Why Do We Merge PDFs?
                  </h3>
                  <p className="text-justify">
                    Merge PDF files create comprehensive presentations and
                    reports.We can combine different documents, slides and
                    images into a cohesive PDF format.
                  </p>
                  <p className="text-justify">
                    Instead of sharing multiple PDF files separately, a single
                    PDF file can be shared easily. It reduces the number of
                    files that need to be sent and also makes it easier for
                    recipients to receive.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Easy To Manage and Store
                  </h3>
                  <p className="text-justify">
                    Having all the content in one document enhances
                    accessibility.It becomes easy to access.When Toolefy Merge
                    your PDF files, a single document is created that contains
                    all the content from the individual files. This eliminates
                    the need to manage and store multiple files separately.
                  </p>
                </div>

                <div className="flex flex-col justify-end gap-2">
                  <h3 className="text-xl font-semibold text-center">
                    Secure File Merging
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
                    This tool also prevents the printing of multiple-Files
                    separately.It reduces the duplication of content and
                    minimizes the risk of errors in documents
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
        <MoreTools url="merge" />
      </div>
    </div>
  );
}

export default Layout;
