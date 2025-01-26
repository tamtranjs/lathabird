"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getImageList } from "@/lib/contentful/photos/getImageList";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

export default function PhotosCarousel() {
  const [isOpen, setisOpen] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMovePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + photos.length - 1) % photos.length
    );
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
  );

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await getImageList();
        const data = await response.data;

        setPhotos(data.carouselImages.map((item: any) => item.url));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div className="relative">
      <Carousel
        className="w-full mt-6"
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {Array.from(photos).map((item: string, index: number) => {
            return (
              <CarouselItem key={index} className={`basis-1/10 pl-1`}>
                <Image
                  src={item}
                  className="w-auto h-auto sm:size-40 object-cover"
                  alt=""
                  width={1920}
                  height={1080}
                  priority
                  onClick={() => handleImageClick(index)}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      {isOpen && (
        <Lightbox
          mainSrc={photos[currentImageIndex]}
          nextSrc={photos[(currentImageIndex + 1) % photos.length]}
          prevSrc={
            photos[(currentImageIndex + photos.length - 1) % photos.length]
          }
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
