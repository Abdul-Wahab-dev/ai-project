"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import FilesDragAndDrop from "@/app/(components)/global/dragDrop/fileDragAndDrop";
import "@/app/globals.css";
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

        if (
          (tempType === "image/png" ||
            tempType === "image/jpeg" ||
            tempType === "image/webp") &&
          tempFile.size <= 20000000
        ) {
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
    <div className="flex flex-col sm:px-5 gap-10">
      <div className="flex items-center justify-center w-full flex-col gap-5">
        <div className="flex items-center justify-center gap-5 w-full">
          {files.length ? (
            files.map((file, index) => (
              <div
                key={file + index}
                className="h-[350px] overflow-hidden p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative"
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
            <FilesDragAndDrop
              onUpload={handleFile}
              content="PNG or JPG or WEBP(MAX. 20MB)"
              multiple={true}
            />
          )}
        </div>
        {files.length ? (
          <button
            type="button"
            onClick={handleConversion}
            className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
            disabled={loading}
          >
            <span>Convert PDF</span>
            {loading ? <div className="loader"></div> : null}
          </button>
        ) : null}
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
  );
};

export default Page;
