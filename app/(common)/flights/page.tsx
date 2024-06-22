import { Suspense } from "react";

import FlightGrid from "./components/FlightGrid";
import type { Metadata } from "next";
import HeadBackGround from "@/components/layouts/HeadBackGround";

export const metadata: Metadata = {
  title: "Flight News & Tips | Lathabird",
  description: "Flights / News",
}

export default async function Flights() {
  return (
    <>
      <HeadBackGround
        title="Flights / News"
        name="Flights"
      />
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <FlightGrid />
        </Suspense>
      </section>
    </>
  )
}
