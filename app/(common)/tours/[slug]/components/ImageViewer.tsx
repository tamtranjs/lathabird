import React from "react";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";

interface ImageProps {
  handleClick: (index: number) => void;
  imgObj: {
    index: number;
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
}

export const ImageViewer: React.FC<ImageProps> = React.memo(function ImageView({
  imgObj,
  handleClick,
}) {
  return (
    <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
      <Image
        src={imgObj.url}
        className="w-full lg:h-60 md:h-44 h-48 object-cover"
        alt="Tour Image"
        width={imgObj.width}
        height={imgObj.height}
      />
      <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
      <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
        <button
          aria-label="View Image"
          type="button"
          onClick={() => handleClick(imgObj.index)}
          className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
        >
          <FiCamera className="size-4 align-middle"></FiCamera>
        </button>
      </div>
    </div>
  );
});

export default ImageViewer;
