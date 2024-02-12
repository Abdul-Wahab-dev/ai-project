"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { formatBytes } from "@/utils/formatBytes";
import FilesDragAndDrop from "@/app/(components)/global/dragDrop/fileDragAndDrop";
const Page = () => {
  const [file, setFile] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [filePreview, setFilePreview] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [size, setSize] = useState("");
  const handleSliderChange = (event) => {
    const tempSliderValue = event.target.value;
    setSliderValue(tempSliderValue);
    const sliderEl4 = document.getElementById("range4");

    const progress = (tempSliderValue / sliderEl4.max) * 100;
    sliderEl4.style.background = `linear-gradient(to right, rgba(0, 169, 255, 1) ${progress}%, #ccc ${progress}%)`;
  };
  const handleFile = (fileList) => {
    if (fileList && fileList.length) {
      const type = fileList[0].type;

      if (fileList[0].size > 20000000) return;
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

  const handleCompress = async () => {
    setLoading(true);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("compress", sliderValue.toString());
      formData.append("mimeType", mimeType);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post("/api/compress", formData, config);
      const base64String = Buffer.from(
        response.data.compressedBuffer.data
      ).toString("base64");
      const bufferSize = Buffer.byteLength(base64String, "base64");

      setSize(formatBytes(bufferSize));
      setFilePreview(base64String);
    }
    setLoading(false);
  };

  // Function to handle download
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    setDownloadLoading(true);
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:${mimeType};base64,${filePreview}`;
    const ext = mimeType.split("/")[1];
    downloadLink.download = `image.${ext}`; // Set the file name
    downloadLink.click();

    // Clean up the temporary element
    downloadLink.remove();
    setDownloadLoading(false);
  };

  return (
    <div className="flex flex-col sm:px-5 gap-10">
      <div className="flex items-center justify-center w-full flex-col gap-5">
        {file ? (
          <div className="flex items-center justify-center flex-col">
            <div className="h-[350px] overflow-hidden p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
              <div
                className="p-2 bg-white absolute top-2 right-2 rounded-md shadow-md cursor-pointer"
                onClick={() => setFile(null)}
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
              size {formatBytes(file.size)}
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
            <div className="wrapper">
              <div className="content">
                <div className="range">
                  <div className="range-slider">
                    <label htmlFor="range">Select a compression level:</label>
                    <br />

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      className="range-input mt-5"
                      id="range4"
                      step="20"
                      onChange={handleSliderChange}
                    />
                    <div className="sliderticks">
                      <span>00</span>
                      <span>20</span>
                      <span>40</span>
                      <span>60</span>
                      <span>80</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCompress}
              className="text-white text-xl font-semibold outline-none bg-blue-bolt flex items-center justify-center gap-3  px-4 py-3 rounded-xl shadow-lg"
              disabled={loading}
            >
              <span> Compress image</span>

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
          </>
        ) : null}
      </div>

      {filePreview.length ? (
        <hr className="w-full h-[1px] bg-black opacity-50" />
      ) : null}
      <div className="flex-1 items-center justify-center flex-col py-5">
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
                  src={`data:${mimeType};base64,${filePreview}`}
                  width={200}
                  height={100}
                  alt="image"
                  className="rounded"
                />
              </div>
              <p className="text-gray-400 text-xs mt-2">size {size}</p>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
