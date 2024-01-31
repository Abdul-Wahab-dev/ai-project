"use client";
import React, { useState } from "react";
import Header from "@/app/(components)/layout/header";
import Image from "next/image";
import axios from "axios";
import { formatBytes } from "@/utils/formatBytes";
const page = () => {
  const [file, setFile] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [filePreview, setFilePreview] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [size, setSize] = useState("");
  const handleSliderChange = (event) => {
    const tempSliderValue = event.target.value;
    setSliderValue(tempSliderValue);
    const sliderEl4 = document.getElementById("range4");

    const progress = (tempSliderValue / sliderEl4.max) * 100;
    sliderEl4.style.background = `linear-gradient(to right, rgba(0, 169, 255, 1) ${progress}%, #ccc ${progress}%)`;
  };
  const handleFile = (event) => {
    if (event.target.files && event.target.files.length) {
      const type = event.target.files[0].type;

      if (event.target.files[0].size > 20000000) return;
      if (type === "image/png" || type === "image/jpeg") {
        setFileUploadLoading(true);
        setTimeout(() => {
          setMimeType(event.target.files[0].type);
          setFile(event.target.files[0]);
          setFileUploadLoading(false);
        }, 1000);
      }
    }
  };

  const handleCompress = async () => {
    setLoading(true);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("compress", sliderValue.toString());
      formData.append("mimeType", mimeType);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post("/api/compress", formData, config);
      const base64String = Buffer.from(
        response.data.compressedBuffer.data
      ).toString("base64");
      const bufferSize = Buffer.byteLength(base64String, "base64");

      setSize(formatBytes(bufferSize));
      setFilePreview(base64String);
    }
    setLoading(false);
  };

  // Function to handle download
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    setDownloadLoading(true);
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:${mimeType};base64,${filePreview}`;
    const ext = mimeType.split("/")[1];
    downloadLink.download = `image.${ext}`; // Set the file name
    downloadLink.click();

    // Clean up the temporary element
    downloadLink.remove();
    setDownloadLoading(false);
  };

  return (
    <div className="min-h-screen bg-winter-wizard">
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Compress Image</h1>
            <p className="text-black text-center">
              Optimize Your Visuals: Effortless Image Compression
            </p>
            <div className=" py-10 px-3 overflow-hidden">
              <div className="flex flex-col px-5 gap-10">
                <div className="flex items-center justify-center w-full flex-col gap-5">
                  {file ? (
                    <div className="flex items-center justify-center flex-col">
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
                        <Image
                          src={URL.createObjectURL(file)}
                          width={200}
                          height={100}
                          alt="image"
                          className="rounded"
                        />
                      </div>
                      <p className="text-gray-400 text-xs mt-2">
                        size {formatBytes(file.size)}
                      </p>{" "}
                    </div>
                  ) : fileUploadLoading ? (
                    <div className="flex flex-col items-center justify-center w-full h-[350px] bg-white">
                      <div className="upload-loader"></div>
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
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-sm text-gray-300 dark:text-gray-300">
                          PNG or JPG (MAX. 20MB)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        onChange={handleFile}
                        className="hidden"
                      />
                    </label>
                  )}
                  {file ? (
                    <>
                      <div className="wrapper">
                        <div className="content">
                          <div className="range">
                            <div className="range-slider">
                              <label htmlFor="range">
                                Select a compression level:
                              </label>
                              <br />

                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                className="range-input mt-5"
                                id="range4"
                                step="20"
                                onChange={handleSliderChange}
                              />
                              <div className="sliderticks">
                                <span>00</span>
                                <span>20</span>
                                <span>40</span>
                                <span>60</span>
                                <span>80</span>
                                <span>100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleCompress}
                        className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
                        disabled={loading}
                      >
                        <span> Compress image</span>
                        {loading ? <div className="loader"></div> : null}
                      </button>
                    </>
                  ) : null}
                </div>

                {filePreview.length ? (
                  <hr className="w-full h-[1px] bg-black opacity-50" />
                ) : null}
                <div className="flex-1 items-center justify-center flex-col py-5">
                  {/* {!filePreview.length ? (
                    <div className="h-[350px] flex items-center justify-center">
                      <h1 className="text-gray-200 text-xl text-center">
                        Please upload image
                      </h1>
                    </div>
                  ) : null} */}

                  <div className="flex items-center justify-center w-full flex-col gap-5">
                    {filePreview.length ? (
                      <div className="flex items-center justify-center flex-col">
                        <div className="h-[350px] p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                          <div
                            className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                            onClick={handleDownload}
                          >
                            {downloadLoading ? (
                              <div className="download-loader"></div>
                            ) : (
                              <Image
                                src={"/assests/compress/icons/download.png"}
                                width={16}
                                height={16}
                                alt="delete-icon"
                              />
                            )}
                          </div>
                          <Image
                            src={`data:${mimeType};base64,${filePreview}`}
                            width={200}
                            height={100}
                            alt="image"
                            className="rounded"
                          />
                        </div>
                        <p className="text-gray-400 text-xs mt-2">
                          size {size}
                        </p>{" "}
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
