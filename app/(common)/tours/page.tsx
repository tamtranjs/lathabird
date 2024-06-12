import { Suspense } from "react";
import type { Metadata } from "next";

import HeadBackGround from "@/components/layouts/HeadBackGround";
import TourGrid from "./components/TourGrid";

export const metadata: Metadata = {
  title: "Tours | Lathabird",
  description: "Tour Packages",
}

export default function Tours() {
  return (
    <>
      <HeadBackGround
        title="Tours"
        name="Tours"
      />
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<h2>Loading ...</h2>}>
          <TourGrid />
        </Suspense>
      </section>
    </>
  );
}
