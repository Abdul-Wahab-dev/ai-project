import Header from "@/app/(components)/layout/header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extract Pages",
  description:
    "Precision Extraction: Retrieve Specific Pages with Our PDF Tool",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Header />
      {/* Compress Section */}
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
      </div>
    </div>
  );
}

export default Layout;
