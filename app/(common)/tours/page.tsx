import { Suspense } from "react";
import type { Metadata } from "next";

import HeadBackGround from "@/components/layouts/HeadBackGround";
import TourGrid from "./components/TourGrid";
import { getTourList } from "@/lib/contentful/tours/getTourList";

export const metadata: Metadata = {
  title: "Tours | Lathabird",
  description: "Tour Packages",
};

export default async function Tours() {
  const tourList = getTourList();

  return (
    <>
      <HeadBackGround title="Tours" name="Tours" />
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <TourGrid tourList={tourList} />
        </Suspense>
      </section>
    </>
  );
}
