import TourItemBeta from "@/components/elements/TourItemBeta";
import { notFound } from "next/navigation";

export default async function TourGrid({ tourList }: { tourList: any }) {
  const tourListData = await tourList;

  if (!tourListData.ok) {
    return notFound();
  }

  return (
    <div className="wrapper relative">
      <div className="layout">
        {tourListData.data.map((tour: any) => {
          return <TourItemBeta key={tour.id} tour={tour} />;
        })}
      </div>
    </div>
  );
}
