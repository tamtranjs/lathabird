"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React, { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

const photos = [
  "/images/background1.jpg",
  "/images/background2.jpg",
  "/images/background3.jpg",
  "/images/background4.jpg",
  "/images/background5.jpg",
  "/images/background6.jpg",
  "/images/background7.jpg",
  "/images/background8.jpg",
  "/images/background9.jpg",
  "/images/background10.jpg",
  "/images/background11.jpg",
  "/images/background12.jpg",
]

export default function PhotosCarousel() {

  const [isOpen, setisOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMovePrev = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + photos.length - 1) % photos.length);
  };

  const handleMoveNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleImageClick = (index: number) => {
      setCurrentImageIndex(index);
      setisOpen(true);
  };

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="relative md:mt-24 mt-16">
      <Carousel className="w-full mt-6"
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent className="-ml-1">
          {
            Array.from(photos).map((item: string, index: number) => {
              return (
                <CarouselItem key={index} className={`basis-1/10 pl-1`}>
                  <Image
                    src={item}
                    className="w-auto h-auto sm:size-40 object-cover"
                    alt=""
                    width={160}
                    height={160}
                    priority
                    onClick={() =>  handleImageClick(index)}
                  />
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
        <CarouselPrevious className="left-0"/>
        <CarouselNext className="right-0"/>
      </Carousel>
      {isOpen && (
        <Lightbox
          mainSrc={photos[currentImageIndex]}
          nextSrc={photos[(currentImageIndex + 1) % photos.length]}
          prevSrc={photos[(currentImageIndex + photos.length - 1) % photos.length]}
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}
