import TourItemAlpha from "@/components/elements/TourItemAlpha";
import TourItemBeta from "@/components/elements/TourItemBeta";

import { getTourListAlpha } from "@/lib/contentful/tours/getTourList";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function ToursPackages() {
  const tourList = await getTourListAlpha();

  return (
    <div className="wrapper relative md:mt-24 mt-16">
      <SectionTitle title="Tours Phổ Biến" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourList.ok &&
          tourList.data.map((tour: any) => (
            <TourItemBeta key={tour.id} tour={tour} />
          ))}
      </div>
    </div>
  );
}
