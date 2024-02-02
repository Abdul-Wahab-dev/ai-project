"use client";
import React, { useState } from "react";

import Image from "next/image";
import axios from "axios";
import FilesDragAndDrop from "@/app/(components)/global/dragDrop/fileDragAndDrop";
import "@/app/globals.css";
const Page = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [conversionType, setConversionType] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);

  const handleFile = (fileList) => {
    if (fileList && fileList.length) {
      // const preview = URL.createObjectURL()
      if (fileList[0].size > 20000000) return;
      const type = fileList[0].type;

      if (
        type === "image/png" ||
        type === "image/jpeg" ||
        type === "image/webp"
      ) {
        setFileUploadLoading(true);
        setTimeout(() => {
          setMimeType(fileList[0].type);
          setFile(fileList[0]);
          setFileUploadLoading(false);
        }, 1000);
      }
    }
  };

  const handleConversion = async () => {
    setLoading(true);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("conversionType", conversionType);
      formData.append("mimeType", mimeType);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post("/api/conversion", formData, config);
      const base64String = Buffer.from(
        response.data.convertedBuffer.data
      ).toString("base64");

      setFilePreview(base64String);
    }
    setLoading(false);
  };

  // Function to handle download
  const handleDownload = () => {
    setDownloadLoading(true);
    // Create a temporary anchor element to trigger download
    const downloadLink = document.createElement("a");
    const mimeTypeArr = mimeType.split("/");
    const ext = mimeTypeArr[1];
    const fileType = mimeTypeArr[0];
    downloadLink.href = `data:${fileType}/${conversionType};base64,${filePreview}`;
    downloadLink.download = `image.${conversionType}`; // Set the file name
    downloadLink.click();

    // Clean up the temporary element
    downloadLink.remove();
    setDownloadLoading(false);
  };

  return (
    <div className="flex flex-col px-5 gap-10">
      <div className="flex items-center justify-center w-full flex-col gap-5">
        {file ? (
          <div className="flex items-center justify-center flex-col">
            <div className="h-[350px] overflow-hidden p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
              <div
                className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                onClick={() => {
                  setFile(null);
                  setMimeType("");
                  setConversionType("");
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
            <p className="text-gray-400 text-xs mt-2">
              Type {file.type.split("/")[1]}
            </p>{" "}
          </div>
        ) : fileUploadLoading ? (
          <div className="flex flex-col items-center justify-center w-full h-[350px] bg-white">
            <div className="upload-loader"></div>
          </div>
        ) : (
          <FilesDragAndDrop
            onUpload={handleFile}
            content="PNG or JPG or WEBP(MAX. 20MB)"
            multiple={false}
          />
        )}
        {file ? (
          <>
            <div className="flex gap-10 my-5">
              {["webp", "jpeg", "png"].map((el) => (
                <label
                  className={`radio-btn-container text-black flex justify-center items-center ${
                    mimeType.split("/")[1] === el ? "opacity-50" : "opacity-100"
                  }`}
                  key={el}
                >
                  <span className="text-lg">{el}</span>
                  <input
                    type="radio"
                    checked={conversionType === el}
                    name="radio"
                    onChange={() => setConversionType(el)}
                    disabled={mimeType.split("/")[1] === el ? true : false}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
            <button
              type="button"
              onClick={handleConversion}
              className="text-white outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
              disabled={loading}
            >
              <span>Convert image</span>
              {loading ? <div className="loader"></div> : null}
            </button>
          </>
        ) : null}
      </div>

      {filePreview.length ? (
        <hr className="w-full h-[1px] bg-black opacity-50" />
      ) : null}
      <div className="flex-1 items-center justify-center flex-col py-5">
        {/* {!filePreview.length ? (
        <div className="h-[350px] flex items-center justify-center">
          <h1 className="text-gray-200 text-xl text-center">
            Please upload image
          </h1>
        </div>
      ) : null} */}

        <div className="flex items-center justify-center w-full flex-col gap-5">
          {filePreview.length ? (
            <div className="flex items-center justify-center flex-col">
              <div className="h-[350px] overflow-hidden p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
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
                <Image
                  src={`data:${mimeType}/${conversionType};base64,${filePreview}`}
                  width={200}
                  height={100}
                  alt="image"
                  className="rounded"
                />
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Type {conversionType}
              </p>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
