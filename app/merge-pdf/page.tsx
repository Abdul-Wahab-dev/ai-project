"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import FilesDragAndDrop from "@/app/(components)/global/dragDrop/fileDragAndDrop";
import "@/app/globals.css";
import { renderPDFPreview } from "@/utils/pdfPreview";
const Page = () => {
  const [files, setFiles] = useState([]);

  const [filePreview, setFilePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);

  const handleFile = (fileList) => {
    if (fileList && fileList.length) {
      const tempFiles = [];
      for (const tempFile of fileList) {
        const tempType = tempFile.type;

        if (tempType === "application/pdf" && tempFile.size <= 20000000) {
          tempFiles.push(tempFile);
        }
      }
      if (!tempFiles.length) return;
      setFileUploadLoading(true);
      setTimeout(() => {
        setFiles([...fileList]);
        setFileUploadLoading(false);
      }, 1000);
    }
  };

  const fetchPdfPreview = useCallback(async () => {
    for (let i = 0; i < files.length; i++) {
      await renderPDFPreview(files[i], files[i].name);
    }
  }, [files]);

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
        const base64String = Buffer.from(response.data.bufferPdf.data).toString(
          "base64"
        );

        setFilePreview(base64String);
        setTimeout(() => {
          renderPDFPreview(files[0], "result-merge-pdf");
        }, 1);
      }
    }
    setLoading(false);
  };

  // Function to handle download
  const handleDownload = async () => {
    setDownloadLoading(true);
    // Create a temporary anchor element to trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:application/pdf;base64,${filePreview}`;

    downloadLink.download = "merged.pdf";
    downloadLink.click();

    // Clean up the temporary element
    downloadLink.remove();
    setDownloadLoading(false);
  };

  useEffect(() => {
    if (files.length) {
      fetchPdfPreview();
    }
  }, [files, fetchPdfPreview]);
  return (
    <div className="flex flex-col sm:px-5 gap-10">
      <div className="flex items-center justify-center w-full flex-col gap-5">
        <div className=" flex items-center justify-center gap-5 w-full">
          {files.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-5 w-full">
              {files.map((file, index) => (
                <div
                  key={file.name + file.lastModified}
                  className="h-[370px] w-[270px] mx-auto p-3 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative"
                >
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
                  <canvas id={file.name} className="w-full h-full"></canvas>
                  {/* <iframe
                    className="w-full h-full"
                    id={file.name}
                    scrolling="no"
                  ></iframe> */}
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
              multiple={true}
            />
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
                    if (event.target.files && event.target.files.length) {
                      setFiles((prev) => [...prev, ...event.target.files]);
                    }
                  }}
                  disabled={loading}
                  className="hidden"
                />
              </label>
            </div>
          ) : null}
          {files.length > 1 ? (
            <button
              type="button"
              onClick={handleConversion}
              className="text-white text-xl font-semibold outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
              disabled={loading}
            >
              <span> Merge PDF</span>
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

              <canvas id="result-merge-pdf" className="w-full h-full"></canvas>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
