"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import "@/app/globals.css";
const Page = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState<{ path: string; number: number }[]>([]);
  const [pageNumber, setPageNumber] = useState("");
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [currentFileData, setCurrentFileData] = useState<{
    preview: string;
    totalPages: number;
  }>(null);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [filePreview, setFilePreview] = useState("");
  const [resltPdfPreview, setResultPdfPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFile = (event) => {
    if (event.target.files && event.target.files.length) {
      if (event.target.files[0].size > 20000000) return;
      const type = event.target.files[0].type;
      if (type === "application/pdf") {
        setFileUploadLoading(true);
        setTimeout(() => {
          setFile(event.target.files[0]);
          setFileUploadLoading(false);
        }, 1000);
      }
    }
  };

  const handleRemovePages = async () => {
    setLoading(true);
    if (!file) return null;
    const formData = new FormData();
    const getPageNumbers = pages.map((el) => el.number);

    formData.append("file", file);
    formData.append("pages", JSON.stringify(getPageNumbers));

    const response = await axios.post("/api/extract-pages", formData, {
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
      setResultPdfPreview(response.data.pdfPreview);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (filePreview) {
      if (document.getElementById("merged-pdf-preview")) {
        document.getElementById("merged-pdf-preview").src = resltPdfPreview;
      }
    }
  }, [filePreview, resltPdfPreview]);
  // Function to handle download
  const handleDownload = async () => {
    setDownloadLoading(true);
    // Create a temporary anchor element to trigger download
    // Create a temporary anchor element to trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:application/pdf;base64,${filePreview}`;

    downloadLink.download = `${Date.now()}.pdf`;
    downloadLink.click();

    // Clean up the temporary element
    downloadLink.remove();

    setDownloadLoading(false);
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
  }, [file, fetchFileData]);

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
    <div className="flex flex-col px-5 gap-10">
      <div className="flex items-center justify-center w-full flex-col gap-5">
        <div className=" flex items-center justify-center gap-5 w-full">
          {pages.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-5 w-full">
              {pages.map((el, index) => (
                <div
                  className="flex flex-col gap-3 items-center justify-center"
                  key={`extract-page-${index}`}
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
            <>
              {fileUploadLoading ? (
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
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
            </>
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
                  Enter the Page you want to extact
                </label>
                <input
                  type="number"
                  className="bg-transparent border border-gray-200 text-gray-900 rounded-lg px-4 py-3 w-[300px] focus:border-gray-200 outline-none"
                  value={pageNumber}
                  onChange={(e) => setPageNumber(e.target.value * 1)}
                />
              </div>
              <button
                className="outline-none text-white bg-blue-bolt  px-4 py-3 rounded-lg shadow-lg"
                type="submit"
                disabled={loading}
              >
                Add
              </button>
            </form>
          ) : null}
          {pages.length ? (
            <button
              type="button"
              onClick={handleRemovePages}
              className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
              disabled={loading}
            >
              <span>Extract Pages</span>
              {loading ? <div className="loader"></div> : null}
            </button>
          ) : null}
        </div>
      </div>

      {filePreview && resltPdfPreview ? (
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
          {filePreview && resltPdfPreview ? (
            <div className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
              <div
                className="p-2 bg-white absolute top-2 flex justify-center items-center right-2 rounded-md shadow-md cursor-pointer"
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
                src={resltPdfPreview + "#toolbar=0&navpanes=0"}
              ></iframe>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
