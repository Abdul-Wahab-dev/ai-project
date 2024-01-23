"use client";
import React, { useState } from "react";
import Header from "@/app/(components)/layout/header";
import Image from "next/image";
import axios from "axios";
import "@/app/globals.css";
const page = () => {
  const [files, setFiles] = useState([]);
  const [filePreview, setFilePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);

  const handleFile = (event) => {
    setFileUploadLoading(true);
    if (event.target.files && event.target.files.length) {
      setTimeout(() => {
        setFiles([...event.target.files]);
        setFileUploadLoading(false);
      }, 1000);
    }
  };
  // console.log(files, " files");
  const handleConversion = async () => {
    setLoading(true);
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
      if (response) {
        setFilePreview(response.data.pdfLink);
      }
    }
    setLoading(false);
  };

  // Function to handle download
  const handleDownload = async () => {
    setDownloadLoading(true);
    // Create a temporary anchor element to trigger download
    const downloadedBuffer = await (
      await fetch(filePreview, { method: "GET", headers: {} })
    ).arrayBuffer();
    // window.location.href = response.pdfLink;
    const url = window.URL.createObjectURL(new Blob([downloadedBuffer]));
    const link = document.createElement("a");
    link.href = url;

    link.download = "images-to-pdf.pdf";
    link.click();

    // Clean up the temporary element
    link.remove();
    setDownloadLoading(false);
  };

  return (
    <div className="min-h-screen bg-winter-wizard">
      <Header />
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Image to PDF</h1>
            <p className="text-black text-center">
              Instantly Convert Images to PDF. A Quick and Free Solution
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
                    className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
                    disabled={loading}
                  >
                    <span>Convert PDF</span>
                    {loading ? <div className="loader"></div> : null}
                  </button>
                </div>

                {!filePreview.length ? null : (
                  <hr className="w-full h-[1px] bg-black opacity-50" />
                )}
                <div className="flex-1 items-center justify-center flex-col py-5">
                  <div className="flex items-center justify-center w-full flex-col gap-5">
                    {filePreview.length ? (
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
                        <div className="bg-white p-4 flex items-center gap-5 shadow rounded">
                          <div>
                            <Image
                              src={"/assests/index/icons/pdf.png"}
                              width={40}
                              height={60}
                              alt="pdf-icon"
                            />
                          </div>
                          <div className="text-black">images-to-pdf.pdf</div>
                        </div>
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
