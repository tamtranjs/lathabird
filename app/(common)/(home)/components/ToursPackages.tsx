import TourItemAlpha from "@/components/elements/TourItemAlpha";
import TourItemBeta from "@/components/elements/TourItemBeta";

import { getTourListAlpha } from "@/lib/contentful/tours/getTourList";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function ToursPackages() {
  const tourList = await getTourListAlpha();

  return (
    <div className="wrapper relative md:mb-16 mb-16">
      <SectionTitle title="Tours Phổ Biến" />

      <div className="layout">
        {tourList.ok &&
          tourList.data.map((tour: any) => (
            <TourItemBeta key={tour.id} tour={tour} />
          ))}
      </div>
    </div>
  );
}
