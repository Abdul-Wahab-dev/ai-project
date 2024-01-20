"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/(components)/layout/header";
import Image from "next/image";
import axios from "axios";
import "@/app/globals.css";
const page = () => {
  const [files, setFiles] = useState([]);

  const [filePreview, setFilePreview] = useState("");
  const [resltPdfPreview, setResultPdfPreview] = useState("");
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

  const fetchPdfPreview = async () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    const response = await axios.post("/api/pdf-preview", formData, {
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (response.data) {
      for (let i = 0; i < response.data.previews.length; i++) {
        if (i < 1) {
          setResultPdfPreview(
            `${response.data.previews[i].base64}#toolbar=0&navpanes=0`
          );
        }
        if (document.getElementById(response.data.previews[i].name)) {
          document.getElementById(
            response.data.previews[i].name
          ).src = `${response.data.previews[i].base64}#toolbar=0&navpanes=0`;
        }
      }
    }
  };

  const handleConversion = async () => {
    setLoading(true);
    if (files.length) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      const response = await axios.post("/api/merge-pdf", formData, {
        responseType: "json",
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (response) {
        setFilePreview(response.data.key);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (filePreview) {
      console.log(resltPdfPreview);
      if (document.getElementById("merged-pdf-preview")) {
        document.getElementById("merged-pdf-preview").src = resltPdfPreview;
      }
    }
  }, [filePreview]);
  // Function to handle download
  const handleDownload = async () => {
    setDownloadLoading(true);
    // Create a temporary anchor element to trigger download
    // const downloadedBuffer = Buffer.from(filePreview);
    const mappedUrl = `https://image-to-pdf-images.s3.us-east-2.amazonaws.com/${filePreview}`;
    const downloadedBuffer = await (
      await fetch(mappedUrl, { method: "GET" })
    ).arrayBuffer();
    // window.location.href = response.pdfLink;
    const url = window.URL.createObjectURL(new Blob([downloadedBuffer]));
    console.log(url, "url");
    const link = document.createElement("a");
    link.href = url;

    link.download = "merged.pdf";
    link.click();

    // Clean up the temporary element
    link.remove();
    setDownloadLoading(false);
  };

  useEffect(() => {
    if (files.length) {
      fetchPdfPreview();
    }
  }, [files]);
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
                  <div className=" flex items-center justify-center gap-5 w-full">
                    {files.length ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-5 w-full">
                        {files.map((file) => (
                          <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
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
                            <iframe
                              className="w-full h-full"
                              id={file.name}
                              scrolling="no"
                            ></iframe>
                          </div>
                        ))}
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-sm text-gray-300 dark:text-gray-300">
                            PDF
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

                  <div className="flex items-center justify-center gap-5">
                    {files.length < 3 && files.length !== 0 ? (
                      <div>
                        {" "}
                        <label className="flex gap-3 items-center px-4 py-3 border  bg-white text-blue rounded-xl shadow-lg  cursor-pointer">
                          <Image
                            src={"/assests/upload.png"}
                            width={18}
                            height={18}
                            alt="upload file"
                          />
                          <span className="text-base text-black leading-normal">
                            Add more
                          </span>
                          <input
                            type="file"
                            onChange={(event) => {
                              if (
                                event.target.files &&
                                event.target.files.length
                              ) {
                                setFiles((prev) => [
                                  ...prev,
                                  ...event.target.files,
                                ]);
                              }
                            }}
                            disabled={loading}
                            className="hidden"
                          />
                        </label>
                      </div>
                    ) : null}
                    <button
                      type="button"
                      onClick={handleConversion}
                      className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
                      disabled={loading}
                    >
                      <span> Merge PDF</span>
                      {loading ? <div className="loader"></div> : null}
                    </button>
                  </div>
                </div>

                {filePreview ? (
                  <hr className="w-full h-[1px] bg-black opacity-50" />
                ) : null}
                <div className="flex-1 items-center justify-center flex-col py-5">
                  {/* {!filePreview ? (
                    <div className="h-[350px] flex items-center justify-center">
                      <h1 className="text-gray-200 text-xl text-center">
                        Please upload image
                      </h1>
                    </div>
                  ) : null} */}

                  <div className="flex items-center justify-center w-full flex-col gap-5">
                    {filePreview ? (
                      <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
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
                        <iframe
                          className="w-full h-full"
                          scrolling="no"
                          id="merged-pdf-preview"
                        ></iframe>
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
