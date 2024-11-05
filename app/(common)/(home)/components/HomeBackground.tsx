"use client";

import React, { useEffect, useState } from "react";
import SearchForm from "@/components/elements/SearchBox/SearchForm";
import { runWarmUpDatabase } from "@/actions/mongo.worldCities";

const images = [
  "/images/background1.jpg",
  "/images/background3.jpg",
  "/images/background6.jpg",
  "/images/background8.jpg",
  "/images/background9.jpg",
  "/images/background10.jpg",
  "/images/background11.jpg",
];

export default function HomeBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    runWarmUpDatabase();
  }, []);

  return (
    <section className="relative bg-gray-100 md:pt-48 md:pb-36 py-36">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center opacity-0 transition-opacity duration-2000 ease-in-out ${
            index === currentIndex ? "opacity-100" : ""
          }`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}
      {/* <div className="hidden sm:block"><Tagline /></div> */}
      <div className="absolute inset-0 bg-slate-900/40"></div>
      <div className="wrapper relative">
        <div className="text-center mb-12">
          <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
            Hãy bắt đầu cuộc hành trình...
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto">
            Bạn đang lên kế hoạch cho một chuyến đi? Chúng tôi sẽ sắp xếp chuyến
            đi của bạn với những địa điểm tốt nhất và với ngân sách tốt nhất!
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
