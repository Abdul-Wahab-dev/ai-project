"use client";
import React, { useEffect, useState, useCallback } from "react";

import Image from "next/image";
import axios from "axios";
import FilesDragAndDrop from "@/app/(components)/global/dragDrop/fileDragAndDrop";
import "@/app/globals.css";
import { renderPDFPreview } from "@/utils/pdfPreview";

const Page = () => {
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
  const handleFile = (fileList) => {
    if (fileList && fileList.length) {
      if (fileList[0].size > 20000000) return;
      const type = fileList[0].type;

      if (type === "application/pdf") {
        setFileUploadLoading(true);

        setTimeout(() => {
          setFile(fileList[0]);
          setFileUploadLoading(false);
        }, 1000);
      }
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
    if (splittedPdfs.length) {
      splittedPdfs.forEach((pdf) => {
        renderPDFPreview(
          file,
          `result-${pdf.range[0]}-${pdf.range[1]}-splitted-pdf`,
          pdf.range[0]
        );
      });
    }
  }, [splittedPdfs]);
  // Function to handle download
  const handleDownload = async (preview) => {
    // Create a temporary anchor element to trigger download
    const base64String = Buffer.from(preview).toString("base64");
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:application/pdf;base64,${base64String}`;

    downloadLink.download = "split.pdf";
    downloadLink.click();
    // Clean up the temporary element
    downloadLink.remove();
  };

  const fetchFileData = useCallback(async () => {
    if (!file) return null;
    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post("/api/remove-pages/file-data", formData, {
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (response.data) {
      setCurrentFileData({
        totalPages: response.data.totalPages,
      });
      if (file) {
        setRanges([
          {
            pageFrom: {
              pageNumber: 1,
              preview: "",
            },
            pageTo: {
              pageNumber: response.data.totalPages,
              preview: "",
            },
            rangeNumber: 1,
          },
        ]);
        setTimeout(() => {
          console.log("heelo");
          renderPDFPreview(file, "range-1-from", 1);
          renderPDFPreview(file, "range-1-to", response.data.totalPages);
        }, 1);

        // fetchFileData(
        //   [1],
        //   (data: {
        //     pageFromPreview: string;
        //     totalPages: number;
        //     pageToPreview: string;
        //   }) => {
        //     setCurrentFileData({
        //       totalPages: data.totalPages,
        //     });
        //     setRanges([
        //       {
        //         pageFrom: {
        //           pageNumber: 1,
        //           preview: data.pageFromPreview,
        //         },
        //         pageTo: {
        //           pageNumber: data.totalPages,
        //           preview: data.pageToPreview,
        //         },
        //         rangeNumber: 1,
        //       },
        //     ]);
        //   }
        // );
      }
    }
  }, [file]);
  useEffect(() => {
    fetchFileData();
  }, [file, fetchFileData]);

  const addRange = (event) => {
    event.preventDefault();

    if (
      pageFrom <= currentFileData.totalPages &&
      pageTo <= currentFileData.totalPages
    ) {
      // fetchFileData(
      //   [pageFrom, pageTo],
      //   (data: {
      //     pageFromPreview: string;
      //     totalPages: number;
      //     pageToPreview: string;
      //   }) => {

      //   }
      // );
      const temp = [...ranges];
      if (isEdit) {
        const tempObj = temp.find(
          (el) => el.rangeNumber === selectedRange.rangeNumber
        );
        tempObj.pageFrom = {
          pageNumber: pageFrom,
          preview: "",
        };
        tempObj.pageTo = {
          pageNumber: pageTo,
          preview: "",
        };
        const updatedObjectArray = temp.map((el) =>
          el.rangeNumber === tempObj.rangeNumber ? tempObj : el
        );

        setRanges([...updatedObjectArray]);
      } else {
        temp.push({
          pageFrom: {
            pageNumber: pageFrom,
            preview: "",
          },
          pageTo: {
            pageNumber: pageTo,
            preview: "",
          },
          rangeNumber: temp.length + 1,
        });
      }

      setRanges([...temp]);
      setTimeout(() => {
        renderPDFPreview(file, `range-${temp.length}-from`, pageFrom);
        renderPDFPreview(file, `range-${temp.length}-to`, pageTo);
      }, 1);
      setIsNew(false);
      setSelectedRange(null);
      setPageFrom(null);
      setPageTo(null);
      setIsEdit(false);
    }
  };

  const handlePagesChanges = (currentRange, value, rangeFor) => {
    const tempCurrentRange = { ...currentRange };

    if (rangeFor === "from") {
      tempCurrentRange.pageFrom.pageNumber = value < 1 ? 1 : value;
      renderPDFPreview(
        file,
        `range-${currentRange.rangeNumber}-from`,
        tempCurrentRange.pageFrom.pageNumber
      );
    }

    if (rangeFor === "to") {
      tempCurrentRange.pageTo.pageNumber = value < 1 ? 1 : value;
      renderPDFPreview(
        file,
        `range-${currentRange.rangeNumber}-to`,
        tempCurrentRange.pageTo.pageNumber
      );
    }

    const tempRanges = ranges.map((range) =>
      range.rangeNumber == tempCurrentRange.rangeNumber
        ? tempCurrentRange
        : range
    );
    setRanges([...tempRanges]);
  };
  return (
    <div className="flex flex-col sm:px-5 gap-10">
      <div className="flex items-center justify-center w-full flex-col gap-5">
        <div className=" flex items-center justify-center gap-5 w-full">
          {ranges.length ? (
            <div className="flex flex-col  items-center justify-center gap-5 w-full">
              {ranges.map((range, index) => (
                <div
                  className="flex flex-col relative gap-3 items-center justify-center"
                  key={`split-pdf-${index}`}
                >
                  <div className="px-1 py-2 sm:p-3 flex flex-col items-center justify-center gap-5 bg-[#f9f9f9] rounded-lg shadow-lg">
                    <span className="text-gray-400 text-sm">
                      Range No {range.rangeNumber ?? 0}
                    </span>
                    <div className=" mx-auto  gap-5 md:flex-row flex-col   flex justify-center items-center relative">
                      {range.pageFrom && (
                        <div className="w-[290px] h-[300px] md:h-[400px]  bg-white p-4 rounded-md shadow  flex items-center justify-between gap-3 flex-col">
                          <canvas
                            id={`range-${range.rangeNumber}-from`}
                            className="w-full h-full"
                          ></canvas>

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
                      {range.pageTo && (
                        <div className="w-[290px] bg-white p-4 rounded-md shadow h-[350px] md:h-[400px]  flex items-center justify-between gap-3 flex-col">
                          <canvas
                            id={`range-${range.rangeNumber}-to`}
                            className="w-full h-full"
                          ></canvas>
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
                          type="number"
                          className="bg-transparent w-full  text-gray-900 rounded-lg px-2 py-3  focus:border-gray-200 outline-none"
                          value={range.pageFrom.pageNumber}
                          min={1}
                          max={currentFileData.totalPages}
                          onChange={(e) => {
                            const isNumber = isNaN(e.target.value * 1)
                              ? null
                              : e.target.value * 1;
                            if (!isNumber) return;
                            if (isNumber <= currentFileData.totalPages) {
                              handlePagesChanges(range, isNumber, "from");
                            }
                          }}
                        />
                      </div>
                      <div className="border border-gray-200 rounded-lg  w-[130px]  sm:w-[150px] flex bg-white items-center shadow">
                        <span className="text-black text-xs sm:text-base opacity-60 px-3 py-2 border-r h-full">
                          To
                        </span>
                        <input
                          type="number"
                          className="bg-transparent w-full  text-gray-900 rounded-lg px-2 py-3  focus:border-gray-200 outline-none"
                          value={range.pageTo.pageNumber}
                          min={1}
                          max={currentFileData.totalPages}
                          onChange={(e) => {
                            const isNumber = isNaN(e.target.value * 1)
                              ? null
                              : e.target.value * 1;
                            if (!isNumber) return;
                            if (isNumber > currentFileData.totalPages) {
                              handlePagesChanges(
                                range,
                                currentFileData.totalPages * 1,
                                "to"
                              );
                            } else {
                              handlePagesChanges(range, isNumber, "to");
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
            <FilesDragAndDrop
              onUpload={handleFile}
              content="PDF (MAX. 20MB)"
              multiple={false}
            />
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
                        if (e.target.value * 1 <= currentFileData.totalPages) {
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
                        if (e.target.value > currentFileData.totalPages) {
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
                  className="text-white text-xl font-semibold outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
                  disabled={loading}
                >
                  <span>Split Pdf</span>
                  {loading ? (
                    <div className="loader"></div>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26 26"
                      width="21"
                      height="21"
                      fill="#FFF"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M13 26C5.82 26 0 20.18 0 13S5.82 0 13 0s13 5.82 13 13-5.82 13-13 13zm0-2c6.075 0 11-4.925 11-11S19.075 2 13 2 2 6.925 2 13s4.925 11 11 11z"
                        fill-rule="nonzero"
                      ></path>
                      <path d="M18.684 13.105a.55.55 0 0 1-.148.378l-5.263 5.263a.55.55 0 0 1-.378.148.54.54 0 0 1-.526-.526V15.21H7.842a.54.54 0 0 1-.526-.526v-3.158A.54.54 0 0 1 7.842 11h4.526V7.842a.52.52 0 0 1 .526-.526c.148 0 .28.066.395.164l5.247 5.247a.55.55 0 0 1 .148.378z"></path>
                    </svg>
                  )}
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
          {splittedPdfs.map((el, index) => (
            <div
              className="flex flex-col gap-3 items-center justify-center"
              key={`${index}`}
            >
              <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
                <div
                  className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                  onClick={() => {
                    handleDownload(el.bufferPdf);
                  }}
                >
                  <Image
                    src={"/assests/compress/icons/download.png"}
                    width={16}
                    height={16}
                    alt="delete-icon"
                  />
                </div>
                <canvas
                  id={`result-${el.range[0]}-${el.range[1]}-splitted-pdf`}
                  className="w-full h-full"
                ></canvas>
              </div>
              <span className="text-gray-500 text-sm">
                Range {el.range[0]} - {el.range[1]}
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Page;
