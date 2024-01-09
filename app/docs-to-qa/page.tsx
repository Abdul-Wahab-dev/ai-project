"use client";
import React, { useState } from "react";
import Header from "@/app/(components)/layout/header";
import Chat from "@/app/(components)/doc-to-qa/chat";
import axios from "axios";
import "@/app/globals.css";
const page = () => {
  const [file, setFile] = useState(null);

  const handleFile = (event) => {
    if (event.target.files && event.target.files.length) {
      setFile(event.target.files[0]);
    }
  };
  // console.log(files, " files");
  const uploadDoc = async () => {
    if (file) {
      const formData = new FormData();

      formData.append("file", file);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        "/api/pdf-to-qa/upload",
        formData,
        config
      );
    }
  };

  return (
    <div className="min-h-screen bg-winter-wizard">
      <Header />
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">
              Transform Image Format
            </h1>
            <p className="text-black text-center">
              Efficiently Modify Image File Type
            </p>
            <div className=" py-10 px-3 overflow-hidden">
              <Chat />
              {/* <div className="flex flex-col px-5 gap-10">
                <div className="flex items-center justify-center w-full flex-col gap-5">
                  <div className="flex items-center justify-center gap-5 w-full">
                    {file ? (
                      <div className="h-[350px] p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                        <div
                          className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                          onClick={() => setFile(null)}
                        >
                          <Image
                            src={"/assests/compress/icons/delete.png"}
                            width={16}
                            height={16}
                            alt="delete-icon"
                          />
                        </div>
                        <div className="bg-white p-4 flex items-center gap-5 shadow rounded">
                          <div>
                            <Image
                              src={"/assests/index/icons/pdf.png"}
                              width={40}
                              height={60}
                              alt="pdf-icon"
                            />
                          </div>
                          <div className="text-black">{file && file.name}</div>
                        </div>
                      </div>
                    ) : (
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-[350px] border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-white"
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-xl text-gray-300 dark:text-gray-300">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-sm text-gray-300 dark:text-gray-300">
                            PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          onChange={handleFile}
                          className="hidden"
                          multiple
                        />
                      </label>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={uploadDoc}
                    className="text-white bg-blue-bolt  px-4 py-3 rounded-xl shadow-lg"
                  >
                    upload document
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Compress Section */}
    </div>
  );
};

export default page;
