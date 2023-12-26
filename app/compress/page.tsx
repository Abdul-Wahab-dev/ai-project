"use client";
import React, { useState } from "react";
import Header from "@/app/(components)/layout/header";
import Image from "next/image";
import axios from "axios";
const page = () => {
  const [file, setFile] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [filePreview, setFilePreview] = useState(null);
  const handleSliderChange = (event) => {
    const tempSliderValue = event.target.value;
    setSliderValue(tempSliderValue);
    const sliderEl4 = document.getElementById("range4");

    const progress = (tempSliderValue / sliderEl4.max) * 100;
    sliderEl4.style.background = `linear-gradient(to right, rgba(0, 169, 255, 1) ${progress}%, #ccc ${progress}%)`;
  };
  const handleFile = (event) => {
    if (event.target.files && event.target.files.length) {
      // const preview = URL.createObjectURL()
      setFile(event.target.files[0]);
    }
  };

  const handleCompress = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("compress", sliderValue.toString());
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post("/api/compress", formData, config);
    }
  };

  return (
    <div className="min-h-screen bg-winter-wizard">
      <Header />
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-5">
            <div className=" py-16 px-3 overflow-hidden">
              <div className="flex flex-col px-5 gap-10">
                <div className="flex items-center justify-center w-full flex-col gap-5">
                  {file ? (
                    <div className="h-[350px] p-7 shadow-md rounded-lg bg-[#f9f9f9] flex justify-center items-center relative">
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-xl text-gray-300 dark:text-gray-300">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-sm text-gray-300 dark:text-gray-300">
                          PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        onChange={handleFile}
                        className="hidden"
                      />
                    </label>
                  )}

                  <div className="wrapper">
                    <div className="content">
                      <div className="range">
                        <div className="range-slider">
                          <label htmlFor="range">
                            Select a compression level:
                          </label>
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
                    className="text-white bg-blue-bolt  px-4 py-3 rounded-xl shadow-lg"
                  >
                    Compress image
                  </button>
                </div>

                <hr className="w-full h-[1px] bg-black opacity-50" />
                <div className="flex-1 items-center justify-center flex-col py-5">
                  <h1 className="text-gray-200 text-xl text-center">
                    Please upload image
                  </h1>
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
