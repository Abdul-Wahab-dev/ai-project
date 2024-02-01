"use client";
import React, { useRef, useEffect } from "react";

export default function FilesDragAndDrop({
  onUpload,
  content,
  multiple,
}: {
  onUpload: (fileList: any) => void;
  content: string;
  multiple: boolean;
}) {
  const drop = useRef(null);

  React.useEffect(() => {
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);

    return () => {
      drop.current &&
        drop.current.removeEventListener("dragover", handleDragOver);
      drop.current && drop.current.removeEventListener("drop", handleDrop);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;

    if (files && files.length) {
      onUpload(files);
    }
  };
  return (
    <label
      ref={drop}
      htmlFor="dropzone-file"
      className="flex flex-col items-center justify-center w-full h-[350px] border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-white FilesDragAndDrop__area"
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
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-sm text-gray-300 dark:text-gray-300">{content}</p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        onChange={(event) => onUpload(event.target.files)}
        className="hidden"
        multiple={multiple}
      />
    </label>
  );
}
