"use client";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import React, { useCallback, useState } from "react";
import ImageViewer from "./ImageViewer";

const imageList = [
  {
    index: 0,
    url: "/images/background1.jpg",
    fileName: "background1.jpg",
    width: 1920,
    height: 1080,
  },
  {
    index: 1,
    url: "/images/background2.jpg",
    fileName: "background2.jpg",
    width: 1920,
    height: 1080,
  },
  {
    index: 2,
    url: "/images/background3.jpg",
    fileName: "background3.jpg",
    width: 1920,
    height: 1080,
  },
  {
    index: 3,
    url: "/images/background4.jpg",
    fileName: "background4.jpg",
    width: 1920,
    height: 1080,
  }
]

export default function ImageGridView() {
  let [photoIndex, setActiveIndex] = useState(0);
  let [isOpen, setOpen] = useState(false);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
    setOpen(true);
  }, [])

  return (
    <>
      {/* <div className="lg:col-span-8 md:col-span-6"> */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 md:col-span-8">
            <ImageViewer
              imgObj={imageList[0]}
              handleClick={handleClick}
            />
          </div>

          <div className="col-span-5 md:col-span-4">
            <ImageViewer
              imgObj={imageList[1]}
              handleClick={handleClick} />
          </div>

          <div className="col-span-5 md:col-span-4">
            <ImageViewer
              imgObj={imageList[2]}
              handleClick={handleClick} />
          </div>

          <div className="col-span-7 md:col-span-8">
            <ImageViewer
              imgObj={imageList[3]}
              handleClick={handleClick} />
          </div>
        </div>
      {/* </div> */}
      {isOpen && (
        <Lightbox
          mainSrc={imageList[photoIndex].url}
          nextSrc={imageList[(photoIndex + 1) % imageList.length].url}
          prevSrc={imageList[(photoIndex + imageList.length - 1) % imageList.length].url}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + imageList.length - 1) % imageList.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % imageList.length)
          }
        />
      )}
    </>
  );
}
