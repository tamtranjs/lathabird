"use server";

import Destinations from "./components/Destinations";
import ToursPackages from "./components/ToursPackages";
import { Clients } from "./components/Clients";
import PhotosCarousel from "./components/PhotosCarousel";
import HomeBackground from "./components/HomeBackground";

export default async function Home() {
  return (
    <>
      <HomeBackground />
      <section className="relative md:py-24 py-16 overflow-hidden">
        <Destinations />
        <ToursPackages />
        <Clients />
        <PhotosCarousel />
      </section>
    </>
  );
}
