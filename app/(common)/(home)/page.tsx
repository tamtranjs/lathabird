"use server";

import Destinations from "./components/Destinations";
import ToursPackages from "./components/ToursPackages";
import { Clients } from "./components/Clients";
import PhotosCarousel from "./components/PhotosCarousel";
import HomeBackground from "./components/HomeBackground";
import DealHot from "./components/DealHot";
import DealFlight from "./components/DealFlight";
import DealHotel from "./components/DealHotel";

export default async function Home() {
  return (
    <>
      <HomeBackground />
      <section className="relative md:py-24 py-16 overflow-hidden">
        <DealHot />
        <DealFlight />
        <DealHotel />
        <Destinations />
        <ToursPackages />
        <Clients />
        <PhotosCarousel />
      </section>
    </>
  );
}
