import React from "react";
import Header from "@/app/(components)/layout/header";
const page = () => {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Header />
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-5">
            <div></div>
            <div className=" py-16 px-3 overflow-hidden">
              <div className="flex flex-col px-5 gap-10">
                <div className="flex items-center justify-center w-full flex-col gap-5">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-white"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-200 dark:text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-xl text-gray-300 dark:text-gray-300">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-sm text-gray-300 dark:text-gray-300">
                        PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                  <button
                    type="button"
                    className="text-white bg-blue-bolt  px-4 py-3 rounded-xl shadow-lg"
                  >
                    Compress image
                  </button>
                </div>

                <hr className="w-full h-[1px] bg-black opacity-50" />
                <div className="flex-1 items-center justify-center flex-col py-5">
                  <h1 className="text-gray-200 text-xl text-center">
                    Please upload image
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Compress Section */}
    </div>
  );
};

export default page;
