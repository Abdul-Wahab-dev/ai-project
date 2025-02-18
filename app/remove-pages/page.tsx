"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import FilesDragAndDrop from "@/app/(components)/global/dragDrop/fileDragAndDrop";
import "@/app/globals.css";
import { renderPDFPreview } from "@/utils/pdfPreview";
const Page = () => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState<{ path: string; number: number }[]>([]);
  const [pageNumber, setPageNumber] = useState("");
  const [currentFileData, setCurrentFileData] = useState<{
    totalPages: number;
  }>(null);
  const [filePreview, setFilePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
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

  const handleRemovePages = async () => {
    if (!file) return null;
    setLoading(true);
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
      const base64String = Buffer.from(response.data.bufferPdf.data).toString(
        "base64"
      );
      setFilePreview(base64String);
      const tempPages = [];
      for (let i = 0; i < currentFileData.totalPages; i++) {
        if (!pages.find((pag) => pag.number === i)) {
          tempPages.push(i + 1);
        }
      }
      setTimeout(() => {
        renderPDFPreview(file, "result-remove-page", tempPages[0]);
      }, 1);
    }
    setLoading(false);
  };
  // Function to handle download
  const handleDownload = async () => {
    setDownloadLoading(true);
    // Create a temporary anchor element to trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:application/pdf;base64,${filePreview}`;

    downloadLink.download = file.name ?? "remove-pages.pdf";
    downloadLink.click();

    // Clean up the temporary element
    downloadLink.remove();
    setDownloadLoading(false);
  };

  const fetchFileData = useCallback(
    async (
      pageNumber: number,
      callback: (data: { totalPages: number }) => void
    ) => {
      if (!file) return null;
      const formData = new FormData();

      formData.append("file", file);
      formData.append("pageNumber", pageNumber.toString());

      const response = await axios.post(
        "/api/remove-pages/file-data",
        formData,
        {
          responseType: "json",
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        callback(response.data);
      }
    },
    [file]
  );
  useEffect(() => {
    if (file) {
      fetchFileData(0, async (data: { totalPages: number }) => {
        setCurrentFileData(data);
        await renderPDFPreview(file, "remove-pdf");
      });
    }
  }, [file, fetchFileData]);
  useEffect(() => {
    if (pages.length < 2) {
      renderPDFPreview(file, "remove-pdf");
    }
  }, [pages]);
  const addPageNumber = (event) => {
    event.preventDefault();
    const isPageExist = pages.every((el) => el.number !== pageNumber - 1);

    if (
      isPageExist &&
      pageNumber &&
      pages.length <= Math.ceil(currentFileData.totalPages / 2)
    ) {
      setPages([
        ...pages,
        {
          path: `remove-page-number-${pageNumber - 1}`,
          number: pageNumber - 1,
        },
      ]);
      setTimeout(() => {
        renderPDFPreview(
          file,
          `remove-page-number-${pageNumber - 1}`,
          pageNumber
        );
      }, 1);
    }
    setPageNumber("");
  };
  return (
    <div className="flex flex-col sm:px-5 gap-10">
      <div className="flex items-center justify-center w-full flex-col gap-5">
        <div className=" flex items-center justify-center gap-5 w-full">
          {pages.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-5 w-full">
              {pages.map((el, index) => (
                <div
                  className="flex flex-col gap-3 items-center justify-center"
                  key={`remove-page-${index}`}
                >
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
                    <canvas id={el.path} className="w-full h-full"></canvas>
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
                <canvas id="remove-pdf" className="w-full h-full"></canvas>
              </div>
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
                  className=" bg-transparent border border-gray-200 text-gray-900 rounded-lg px-4 py-3 w-[300px] focus:border-gray-200 outline-none"
                  value={pageNumber}
                  max={currentFileData && currentFileData.totalPages}
                  onChange={(e) => {
                    const isNumber = isNaN(e.target.value * 1)
                      ? null
                      : e.target.value * 1;
                    if (!isNumber) return;
                    if (isNumber <= currentFileData.totalPages)
                      setPageNumber(isNumber);
                  }}
                />
              </div>
              <button
                className="outline-none text-white bg-blue-bolt  px-4 py-3 rounded-lg shadow-lg"
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
              className="text-white font-semibold text-xl outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
              disabled={loading}
            >
              <span> Remove Page(s)</span>
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
          ) : null}
        </div>
      </div>

      {filePreview ? (
        <hr className="w-full h-[1px] bg-black opacity-50" />
      ) : null}
      <div className="flex-1 items-center justify-center flex-col py-5">
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

              <canvas
                id="result-remove-page"
                className="w-full h-full"
              ></canvas>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
