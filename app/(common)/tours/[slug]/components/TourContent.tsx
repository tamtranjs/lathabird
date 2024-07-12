"use client";

import Image from "next/image";
import { FiCamera } from "react-icons/fi";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import React, { useCallback, useState } from "react";
import ImageViewer from "./ImageViewer";

const imageList = [
  {
    url: "/images/background1.jpg",
    fileName: "background1.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "/images/background2.jpg",
    fileName: "background2.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "/images/background3.jpg",
    fileName: "background3.jpg",
    width: 1920,
    height: 1080,
  },
  {
    url: "/images/background4.jpg",
    fileName: "background4.jpg",
    width: 1920,
    height: 1080,
  }
]

export default function TourContent() {
  let [photoIndex, setActiveIndex] = useState(0);
  let [isOpen, setOpen] = useState(false);

  const handleClick = useCallback((index: number) => {
    console.log('index', index);
    setActiveIndex(index);
    setOpen(true);
  }, [])

  return (
    <>
      <div className="lg:col-span-8 md:col-span-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 md:col-span-8">
            <ImageViewer
              imgObj={imageList[0]}
              handleClick={() => handleClick(0)}
            />
          </div>

          <div className="col-span-5 md:col-span-4">
            <ImageViewer
              imgObj={imageList[1]}
              handleClick={() => handleClick(1)} />
          </div>

          <div className="col-span-5 md:col-span-4">
            <ImageViewer
              imgObj={imageList[2]}
              handleClick={() => handleClick(2)} />
          </div>

          <div className="col-span-7 md:col-span-8">
            <ImageViewer
              imgObj={imageList[3]}
              handleClick={() => handleClick(3)} />
          </div>
        </div>
      </div>
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
