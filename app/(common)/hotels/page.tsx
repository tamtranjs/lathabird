import { Suspense } from "react";

import HotelGrid from "./components/HotelGrid";
import type { Metadata } from "next";
import HeadBackGround from "@/components/layouts/HeadBackGround";

export const metadata: Metadata = {
  title: "Hotels | Lathabird",
  description: "Hotels / News",
}

export default async function Hotels() {
  return (
    <>
      <HeadBackGround
        title="Hotels / News"
        name="Hotels"
      />
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <HotelGrid />
        </Suspense>
      </section>
    </>
  )
}
