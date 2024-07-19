import { packages } from "@/lib/data";
import TourItem from "@/components/elements/TourItem";
import { notFound } from "next/navigation";

export default async function TourGrid({ tourList }: { tourList: any }) {
  const tourListData = await tourList;

  if (!tourListData.ok) {
    return notFound();
  }

  return (
    <div className="wrapper relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tourListData.data.map((item: any) => {
          return <TourItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
