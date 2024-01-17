"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/(components)/layout/header";
import Image from "next/image";
import axios from "axios";
import "@/app/globals.css";
const page = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState<{ path: string; number: number }[]>([]);
  const [pageNumber, setPageNumber] = useState("");
  const [currentFileData, setCurrentFileData] = useState<{
    preview: string;
    totalPages: number;
  }>(null);
  const [filePreview, setFilePreview] = useState("");
  const [resltPdfPreview, setResultPdfPreview] = useState("");
  const handleFile = (event) => {
    if (event.target.files && event.target.files.length) {
      setFile(event.target.files[0]);
    }
  };

  const handleRemovePages = async () => {
    if (!file) return null;
    const formData = new FormData();
    const getPageNumbers = pages.map((el) => el.number);

    formData.append("file", file);
    formData.append("pages", JSON.stringify(getPageNumbers));

    const response = await axios.post("/api/remove-pages", formData, {
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (response) {
      setFilePreview(response.data.key);
      //   const pagesCount = [];
      //   const getPageNumbers = pages.map((el) => el.number);
      //   for (let i = 0; i < currentFileData.totalPages; i++) {
      //     if (!getPageNumbers.includes(i)) {
      //       pagesCount.push(i);
      //     }
      //   }
      setResultPdfPreview(response.data.pdfPreview);
      //   await fetchFileData(pagesCount[0], (data) => {
      //     setResultPdfPreview(data.preview);
      //   });
    }
  };
  useEffect(() => {
    if (filePreview) {
      if (document.getElementById("merged-pdf-preview")) {
        document.getElementById("merged-pdf-preview").src = resltPdfPreview;
      }
    }
  }, [filePreview]);
  // Function to handle download
  const handleDownload = async () => {
    // Create a temporary anchor element to trigger download
    // const downloadedBuffer = Buffer.from(filePreview);
    const mappedUrl = `https://image-to-pdf-images.s3.us-east-2.amazonaws.com/${filePreview}`;
    const downloadedBuffer = await (
      await fetch(mappedUrl, { method: "GET" })
    ).arrayBuffer();
    // window.location.href = response.pdfLink;
    const url = window.URL.createObjectURL(new Blob([downloadedBuffer]));

    const link = document.createElement("a");
    link.href = url;

    link.download = `${Date.now()}.pdf`;
    link.click();

    // Clean up the temporary element
    link.remove();
  };

  const fetchFileData = async (
    pageNumber: number,
    callback: (data: { preview: string; totalPages: number }) => void
  ) => {
    if (!file) return null;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("pageNumber", pageNumber.toString());

    const response = await axios.post("/api/remove-pages/file-data", formData, {
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (response.data) {
      callback(response.data);
    }
  };
  useEffect(() => {
    if (file) {
      fetchFileData(0, (data: { preview: string; totalPages: number }) =>
        setCurrentFileData(data)
      );
    }
  }, [file]);

  const addPageNumber = (event) => {
    event.preventDefault();
    const isPageExist = pages.every((el) => el.number !== pageNumber - 1);

    if (
      isPageExist &&
      pageNumber &&
      pages.length <= Math.ceil(currentFileData.totalPages / 2)
    ) {
      fetchFileData(
        pageNumber - 1,
        (data: { preview: string; totalPages: number }) => {
          setPages([
            ...pages,
            {
              path: data.preview,
              number: pageNumber - 1,
            },
          ]);
        }
      );
    }
    setPageNumber("");
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
                  <div className=" flex items-center justify-center gap-5 w-full">
                    {pages.length ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-5 w-full">
                        {pages.map((el) => (
                          <div className="flex flex-col gap-3 items-center justify-center">
                            <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                              <div
                                className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                                onClick={() => {
                                  const tempFiles = pages.filter(
                                    (elem) => elem.number !== el.number
                                  );
                                  setPages([...tempFiles]);
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
                                src={el.path + "#toolbar=0&navpanes=0"}
                                scrolling="no"
                              ></iframe>
                            </div>
                            <span className="text-gray-500 text-sm">
                              Page No {el.number + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : file ? (
                      <div className="grid   items-center justify-center gap-5 w-full">
                        <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                          <div
                            className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                            onClick={() => {
                              setFile(null);
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
                            id="target-pdf"
                            src={
                              currentFileData &&
                              currentFileData.preview + "#toolbar=0&navpanes=0"
                            }
                            scrolling="no"
                          ></iframe>
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

                  <div className="flex flex-col items-center justify-center gap-5">
                    {file ? (
                      <form
                        className="flex items-end justify-center gap-3"
                        onSubmit={addPageNumber}
                      >
                        <div>
                          {" "}
                          <label
                            htmlFor="first_name"
                            className="block mb-2 mt-10  text-sm font-medium text-gray-900"
                          >
                            Enter the Page you want to remove
                          </label>
                          <input
                            type="number"
                            className="bg-transparent border border-gray-200 text-gray-900 rounded-lg px-4 py-3 w-[300px] focus:border-gray-200 outline-none"
                            value={pageNumber}
                            onChange={(e) => setPageNumber(e.target.value * 1)}
                          />
                        </div>
                        <button
                          className="text-white bg-blue-bolt  px-4 py-3 rounded-lg shadow-lg"
                          type="submit"
                        >
                          Add
                        </button>
                      </form>
                    ) : null}
                    {pages.length ? (
                      <button
                        type="button"
                        onClick={handleRemovePages}
                        className="text-white bg-blue-bolt  px-4 py-3 rounded-xl shadow-lg"
                      >
                        Remove Pages
                      </button>
                    ) : null}
                  </div>
                </div>

                <hr className="w-full h-[1px] bg-black opacity-50" />
                <div className="flex-1 items-center justify-center flex-col py-5">
                  {!filePreview ? (
                    <div className="h-[350px] flex items-center justify-center">
                      <h1 className="text-gray-200 text-xl text-center">
                        Please upload image
                      </h1>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-center w-full flex-col gap-5">
                    {filePreview && resltPdfPreview ? (
                      <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
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
                        <iframe
                          className="w-full h-full"
                          scrolling="no"
                          src={resltPdfPreview + "#toolbar=0&navpanes=0"}
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
