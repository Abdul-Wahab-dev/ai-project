import Header from "@/app/(components)/layout/header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transform Image Format",
  description: "Versatile Image Transformation: Convert Formats Seamlessly",
};

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Header />
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
      </div>
    </div>
  );
}

export default Layout;
