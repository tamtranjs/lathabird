"use client";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import React, { useCallback, useState } from "react";
import ImageViewer from "./ImageViewer";

interface Props {
  imageList: {
    index: number;
    url: string;
    fileName: string;
    width: number;
    height: number;
  }[];
}

export default function ImageGridView({ imageList }: Props) {
  let [photoIndex, setActiveIndex] = useState(0);
  let [isOpen, setOpen] = useState(false);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
    setOpen(true);
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 md:col-span-8">
          <ImageViewer imgObj={imageList[0]} handleClick={handleClick} />
        </div>

        <div className="col-span-5 md:col-span-4">
          <ImageViewer imgObj={imageList[1]} handleClick={handleClick} />
        </div>

        <div className="col-span-5 md:col-span-4">
          <ImageViewer imgObj={imageList[2]} handleClick={handleClick} />
        </div>

        <div className="col-span-7 md:col-span-8">
          <ImageViewer imgObj={imageList[3]} handleClick={handleClick} />
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={imageList[photoIndex].url}
          nextSrc={imageList[(photoIndex + 1) % imageList.length].url}
          prevSrc={
            imageList[(photoIndex + imageList.length - 1) % imageList.length]
              .url
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex(
              (photoIndex + imageList.length - 1) % imageList.length
            )
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % imageList.length)
          }
        />
      )}
    </>
  );
}
