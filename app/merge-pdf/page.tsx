"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import FilesDragAndDrop from "@/app/(components)/global/dragDrop/fileDragAndDrop";
import "@/app/globals.css";
const Page = () => {
  const [files, setFiles] = useState([]);

  const [filePreview, setFilePreview] = useState("");
  const [resltPdfPreview, setResultPdfPreview] = useState("");
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
      }
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
    <div className="flex flex-col px-5 gap-10">
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
              className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
              disabled={loading}
            >
              <span> Merge PDF</span>
              {loading ? <div className="loader"></div> : null}
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
  );
};

export default Page;
