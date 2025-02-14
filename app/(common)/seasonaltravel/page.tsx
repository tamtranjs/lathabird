import { Suspense } from "react";

import type { Metadata } from "next";
import HeadBackGround from "@/components/layouts/HeadBackGround";
import ItemGrid from "./components/ItemGrid";
import { getSeasonalTravelList } from "@/lib/contentful/seasonalTravel";

export const metadata: Metadata = {
  title: "Seasonal Travel | Lathabird",
  description: "Blogs",
};

export default async function SeasonalTravel() {
  const seasonalTravelList = getSeasonalTravelList();

  return (
    <>
      <HeadBackGround title="Seasonal Travel" name="Blogs" />
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <ItemGrid seasonalTravelList={seasonalTravelList} />
        </Suspense>
      </section>
    </>
  );
}
