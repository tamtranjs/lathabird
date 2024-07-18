"use client";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import React, { useCallback, useState } from "react";
import ImageViewer from "./ImageViewer";

interface Props {
  photoList: {
    index: number;
    url: string;
    fileName: string;
    width: number;
    height: number;
  }[];
}

export default function ImageGridView({ photoList }: Props) {
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
          <ImageViewer
            imgObj={{ ...photoList[0], index: 0 }}
            handleClick={handleClick}
          />
        </div>

        <div className="col-span-5 md:col-span-4">
          <ImageViewer
            imgObj={{ ...photoList[1], index: 1 }}
            handleClick={handleClick}
          />
        </div>

        <div className="col-span-5 md:col-span-4">
          <ImageViewer
            imgObj={{ ...photoList[2], index: 2 }}
            handleClick={handleClick}
          />
        </div>

        <div className="col-span-7 md:col-span-8">
          <ImageViewer
            imgObj={{ ...photoList[3], index: 3 }}
            handleClick={handleClick}
          />
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={photoList[photoIndex].url}
          nextSrc={photoList[(photoIndex + 1) % photoList.length].url}
          prevSrc={
            photoList[(photoIndex + photoList.length - 1) % photoList.length]
              .url
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex(
              (photoIndex + photoList.length - 1) % photoList.length
            )
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % photoList.length)
          }
        />
      )}
    </>
  );
}
