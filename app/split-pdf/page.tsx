"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/(components)/layout/header";
import Image from "next/image";
import axios from "axios";
import "@/app/globals.css";
const page = () => {
  const [loading, setLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [ranges, setRanges] = useState([]);
  const [pageFrom, setPageFrom] = useState(null);
  const [pageTo, setPageTo] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [pages, setPages] = useState<{ path: string; number: number }[]>([]);
  const [splittedPdfs, setSplittedPdfs] = useState([]);
  const [currentFileData, setCurrentFileData] = useState<{
    totalPages: number;
  }>(null);
  const [filePreview, setFilePreview] = useState("");
  const [resltPdfPreview, setResultPdfPreview] = useState("");
  const handleFile = (event) => {
    setFileUploadLoading(true);
    if (event.target.files && event.target.files.length) {
      setTimeout(() => {
        setFile(event.target.files[0]);
        setFileUploadLoading(false);
      }, 1000);
    }
  };

  const handleSplitPdf = async () => {
    if (!file) return null;
    setLoading(true);
    const formData = new FormData();
    const getPageNumbers = pages.map((el) => el.number);
    const sortedRanges = ranges.map((range) => {
      const tempRange = [];
      tempRange.push(range.pageFrom.pageNumber ?? 1);
      tempRange.push(range.pageTo.pageNumber ?? 1);

      return tempRange.sort((a, b) => a - b);
    });

    formData.append("file", file);
    formData.append("ranges", JSON.stringify(sortedRanges));

    const response = await axios.post("/api/split-pdf", formData, {
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (response) {
      setSplittedPdfs(response.data.splittedPdf);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (filePreview) {
      if (document.getElementById("merged-pdf-preview")) {
        document.getElementById("merged-pdf-preview").src = resltPdfPreview;
      }
    }
  }, [filePreview]);
  // Function to handle download
  const handleDownload = async (key) => {
    // Create a temporary anchor element to trigger download
    // const downloadedBuffer = Buffer.from(filePreview);
    const mappedUrl = `https://image-to-pdf-images.s3.us-east-2.amazonaws.com/${key}`;
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
    pageNumbers: [number],
    callback: (data: {
      pageFromPreview: string;
      totalPages: number;
      pageToPreview: string;
    }) => void
  ) => {
    if (!file) return null;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("pageNumbers", JSON.stringify(pageNumbers));

    const response = await axios.post("/api/split-pdf/file-data", formData, {
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (response.data) {
      console.log(response.data);
      callback(response.data);
    }
  };
  useEffect(() => {
    if (file) {
      fetchFileData(
        [1],
        (data: {
          pageFromPreview: string;
          totalPages: number;
          pageToPreview: string;
        }) => {
          setCurrentFileData({
            totalPages: data.totalPages,
          });
          setRanges([
            {
              pageFrom: {
                pageNumber: 1,
                preview: data.pageFromPreview,
              },
              pageTo: {
                pageNumber: data.totalPages,
                preview: data.pageToPreview,
              },
              rangeNumber: 1,
            },
          ]);
        }
      );
    }
  }, [file]);

  const addRange = (event) => {
    event.preventDefault();

    if (
      pageFrom <= currentFileData.totalPages &&
      pageTo <= currentFileData.totalPages
    ) {
      fetchFileData(
        [pageFrom, pageTo],
        (data: {
          pageFromPreview: string;
          totalPages: number;
          pageToPreview: string;
        }) => {
          const temp = [...ranges];
          if (isEdit) {
            const tempObj = temp.find(
              (el) => el.rangeNumber === selectedRange.rangeNumber
            );
            tempObj.pageFrom = {
              pageNumber: pageFrom,
              preview: data.pageFromPreview,
            };
            tempObj.pageTo = {
              pageNumber: pageTo,
              preview: data.pageToPreview,
            };
            const updatedObjectArray = temp.map((el) =>
              el.rangeNumber === tempObj.rangeNumber ? tempObj : el
            );

            setRanges([...updatedObjectArray]);
          } else {
            temp.push({
              pageFrom: {
                pageNumber: pageFrom,
                preview: data.pageFromPreview,
              },
              pageTo: {
                pageNumber: pageTo,
                preview: data.pageToPreview,
              },
              rangeNumber: temp.length + 1,
            });
          }
          setRanges([...temp]);
          setIsNew(false);
          setSelectedRange(null);
          setPageFrom(null);
          setPageTo(null);
          setIsEdit(false);
        }
      );
    }
  };

  const handlePagesChanges = (currentRange, value, rangeFor) => {
    const tempCurrentRange = { ...currentRange };

    if (rangeFor === "from") {
      tempCurrentRange.pageFrom.pageNumber = value < 1 ? 1 : value;
    }

    if (rangeFor === "to") {
      tempCurrentRange.pageTo.pageNumber = value < 1 ? 1 : value;
    }

    fetchFileData(
      [
        tempCurrentRange.pageFrom.pageNumber,
        tempCurrentRange.pageTo.pageNumber,
      ],
      (data: {
        pageFromPreview: string;
        totalPages: number;
        pageToPreview: string;
      }) => {
        tempCurrentRange.pageFrom.preview = data.pageFromPreview;
        tempCurrentRange.pageTo.preview = data.pageToPreview;
        const temp = ranges.map((range) =>
          range.rangeNumber == tempCurrentRange.rangeNumber
            ? tempCurrentRange
            : range
        );

        setRanges([...temp]);
      }
    );

    const tempRanges = ranges.map((range) =>
      range.rangeNumber == tempCurrentRange.rangeNumber
        ? tempCurrentRange
        : range
    );

    setRanges([...tempRanges]);
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
                    {ranges.length ? (
                      <div className="flex flex-col  items-center justify-center gap-5 w-full">
                        {ranges.map((range, index) => (
                          <div className="flex flex-col relative gap-3 items-center justify-center">
                            <div className="px-1 py-2 sm:p-3 flex flex-col items-center justify-center gap-5 bg-[#f9f9f9] rounded-lg shadow-lg">
                              <span className="text-gray-400 text-sm">
                                Range No {range.rangeNumber ?? 0}
                              </span>
                              <div className=" mx-auto  gap-5 md:flex-row flex-col   flex justify-center items-center relative">
                                {range.pageFrom.preview && (
                                  <div className="w-[290px] h-[300px] md:h-[400px]  bg-white p-4 rounded-md shadow  flex items-center justify-between gap-3 flex-col">
                                    <iframe
                                      className="w-full h-full"
                                      src={
                                        range.pageFrom.preview +
                                        "#toolbar=0&navpanes=0"
                                      }
                                      scrolling="no"
                                    ></iframe>
                                    <span className="text-gray-400 text-sm">
                                      Page No {range.pageFrom.pageNumber}
                                    </span>
                                  </div>
                                )}
                                <span className="flex items-center flex-col md:flex-row justify-center gap-1">
                                  <span className="w-[7px] h-[7px] bg-black opacity-50 rounded-full"></span>
                                  <span className="w-[7px] h-[7px] bg-black opacity-50 rounded-full"></span>
                                  <span className="w-[7px] h-[7px] bg-black opacity-50 rounded-full"></span>
                                </span>
                                {range.pageTo.preview && (
                                  <div className="w-[290px] bg-white p-4 rounded-md shadow h-[350px] md:h-[400px]  flex items-center justify-between gap-3 flex-col">
                                    <iframe
                                      className="w-full h-full"
                                      src={
                                        range.pageTo.preview +
                                        "#toolbar=0&navpanes=0"
                                      }
                                      scrolling="no"
                                    ></iframe>
                                    <span className="text-gray-400 text-sm">
                                      Page No {range.pageTo.pageNumber}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center justify-center gap-5 ">
                                <div className="border border-gray-200 rounded-lg w-[130px]  sm:w-[150px] flex bg-white items-center shadow">
                                  <span className="text-black text-xs sm:text-base opacity-60 px-3 py-2 border-r h-full">
                                    From
                                  </span>
                                  <input
                                    type="text"
                                    className="bg-transparent w-full  text-gray-900 rounded-lg px-2 py-3  focus:border-gray-200 outline-none"
                                    value={range.pageFrom.pageNumber}
                                    max={currentFileData.totalPages}
                                    onChange={(e) => {
                                      const isNumber = isNaN(e.target.value * 1)
                                        ? null
                                        : e.target.value * 1;
                                      if (!isNumber) return;
                                      if (
                                        isNumber <= currentFileData.totalPages
                                      ) {
                                        handlePagesChanges(
                                          range,
                                          isNumber,
                                          "from"
                                        );
                                      }
                                    }}
                                  />
                                </div>
                                <div className="border border-gray-200 rounded-lg  w-[130px]  sm:w-[150px] flex bg-white items-center shadow">
                                  <span className="text-black text-xs sm:text-base opacity-60 px-3 py-2 border-r h-full">
                                    To
                                  </span>
                                  <input
                                    type="text"
                                    className="bg-transparent w-full  text-gray-900 rounded-lg px-2 py-3  focus:border-gray-200 outline-none"
                                    value={range.pageTo.pageNumber}
                                    max={currentFileData.totalPages}
                                    onChange={(e) => {
                                      const isNumber = isNaN(e.target.value * 1)
                                        ? null
                                        : e.target.value * 1;
                                      if (!isNumber) return;
                                      if (
                                        isNumber > currentFileData.totalPages
                                      ) {
                                        handlePagesChanges(
                                          range,
                                          currentFileData.totalPages * 1,
                                          "to"
                                        );
                                      } else {
                                        handlePagesChanges(
                                          range,
                                          isNumber,
                                          "to"
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
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
                          {/* <p className="text-sm text-gray-300 dark:text-gray-300">
                            PDF
                          </p> */}
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
                    {isNew ? (
                      <form
                        className="flex items-end justify-center gap-3"
                        onSubmit={addRange}
                      >
                        <div>
                          {" "}
                          <label
                            htmlFor="first_name"
                            className="block mb-2 mt-5  text-sm font-medium text-gray-900"
                          >
                            Enter the Range to split
                          </label>
                          <div className="flex items-center justify-center gap-5 ">
                            <div className="border border-gray-200 rounded-lg  w-[130px] sm:w-[150px] flex bg-white items-center shadow">
                              <span className="text-black text-xs sm:text-base opacity-60 px-3 py-2 border-r h-full">
                                From
                              </span>
                              <input
                                type="number"
                                className="bg-transparent w-full  text-gray-900 rounded-lg px-2 py-3  focus:border-gray-200 outline-none"
                                value={pageFrom}
                                min={1}
                                max={currentFileData.totalPages}
                                onChange={(e) => {
                                  if (
                                    e.target.value * 1 <=
                                    currentFileData.totalPages
                                  ) {
                                    setPageFrom(e.target.value * 1);
                                  }
                                }}
                              />
                            </div>
                            <div className="border border-gray-200 rounded-lg  w-[130px] sm:w-[150px] flex bg-white items-center shadow">
                              <span className="text-black text-xs sm:text-base opacity-60 px-3 py-2 border-r h-full">
                                To
                              </span>
                              <input
                                type="number"
                                className="bg-transparent w-full  text-gray-900 rounded-lg px-2 py-3  focus:border-gray-200 outline-none"
                                value={pageTo}
                                min={1}
                                max={currentFileData.totalPages}
                                onChange={(e) => {
                                  if (
                                    e.target.value > currentFileData.totalPages
                                  ) {
                                    setPageTo(currentFileData.totalPages);
                                  } else {
                                    setPageTo(e.target.value * 1);
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="text-white outline-none bg-blue-bolt  px-4 py-3 rounded-lg shadow-lg"
                          type="submit"
                        >
                          Add
                        </button>
                      </form>
                    ) : null}
                    {ranges.length ? (
                      <>
                        <div className="flex items-center justify-center gap-5">
                          {!isNew ? (
                            <button
                              type="button"
                              onClick={() => setIsNew(true)}
                              className=" bg-transparent border-2 flex items-center justify-center gap-2 border-blue-bolt text-blue-bolt px-4 py-2 rounded-xl"
                            >
                              <span className="text-xl text-blue-bolt font-semibold">
                                +
                              </span>{" "}
                              <span>Range</span>
                            </button>
                          ) : null}
                        </div>
                        <div className="flex items-center justify-center mt-10">
                          <button
                            type="button"
                            onClick={handleSplitPdf}
                            className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
                            disabled={loading}
                          >
                            <span>Split Pdf</span>
                            {loading ? <div className="loader"></div> : null}
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>

                {splittedPdfs.length ? (
                  <hr className="w-full h-[1px] bg-black opacity-50" />
                ) : null}
                {splittedPdfs.length ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-5 w-full">
                    {splittedPdfs.map((el) => (
                      <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                          <div
                            className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                            onClick={() => {
                              handleDownload(el.key);
                            }}
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
                            src={el.preview + "#toolbar=0&navpanes=0"}
                            scrolling="no"
                          ></iframe>
                        </div>
                        <span className="text-gray-500 text-sm">
                          Range {el.range[0]} - {el.range[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
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
