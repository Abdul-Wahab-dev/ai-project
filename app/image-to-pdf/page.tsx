"use client";
import React, { useState } from "react";
import Header from "@/app/(components)/layout/header";
import Image from "next/image";
import axios from "axios";
import "@/app/globals.css";
const page = () => {
  const [files, setFiles] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [filePreview, setFilePreview] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [conversionType, setConversionType] = useState("");

  const handleFile = (event) => {
    if (event.target.files && event.target.files.length) {
      // const preview = URL.createObjectURL()
      // setMimeType(event.target.files[0].type);

      setFiles([...event.target.files]);
    }
  };
  // console.log(files, " files");
  const handleConversion = async () => {
    if (files.length) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      // formData.append("conversionType", conversionType);
      // formData.append("mimeType", mimeType);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post("/api/image-to-pdf", formData, config);
      // const base64String = Buffer.from(
      //   response.data.convertedBuffer.data
      // ).toString("base64");

      // setFilePreview(base64String);
    }
  };

  // Function to handle download
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const downloadLink = document.createElement("a");
    const mimeTypeArr = mimeType.split("/");
    const ext = mimeTypeArr[1];
    const fileType = mimeTypeArr[0];
    downloadLink.href = `data:${fileType}/${conversionType};base64,${filePreview}`;
    downloadLink.download = `image.${conversionType}`; // Set the file name
    downloadLink.click();

    // Clean up the temporary element
    downloadLink.remove();
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
              <div className="flex flex-col px-5 gap-10">
                <div className="flex items-center justify-center w-full flex-col gap-5">
                  <div className="flex items-center justify-center gap-5 w-full">
                    {files.length ? (
                      files.map((file) => (
                        <div className="h-[350px] p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                          <div
                            className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                            onClick={() => {
                              const tempFiles = files.filter(
                                (el) => el.name !== file.name
                              );
                              setFiles([...tempFiles]);
                            }}
                          >
                            <Image
                              src={"/assests/compress/icons/delete.png"}
                              width={16}
                              height={16}
                              alt="delete-icon"
                            />
                          </div>

                          <Image
                            src={URL.createObjectURL(file)}
                            width={200}
                            height={100}
                            alt="image"
                            className="rounded"
                          />
                        </div>
                      ))
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
                    onClick={handleConversion}
                    className="text-white bg-blue-bolt  px-4 py-3 rounded-xl shadow-lg"
                  >
                    Convert PDF
                  </button>
                </div>

                <hr className="w-full h-[1px] bg-black opacity-50" />
                <div className="flex-1 items-center justify-center flex-col py-5">
                  {!filePreview.length ? (
                    <div className="h-[350px] flex items-center justify-center">
                      <h1 className="text-gray-200 text-xl text-center">
                        Please upload image
                      </h1>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-center w-full flex-col gap-5">
                    {filePreview.length ? (
                      <div className="h-[350px] p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                        <div
                          className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                          onClick={handleDownload}
                        >
                          <Image
                            src={"/assests/compress/icons/download.png"}
                            width={16}
                            height={16}
                            alt="delete-icon"
                          />
                        </div>
                        <Image
                          src={`data:${mimeType}/${conversionType};base64,${filePreview}`}
                          width={200}
                          height={100}
                          alt="image"
                          className="rounded"
                        />
                      </div>
                    ) : null}
                  </div>
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
