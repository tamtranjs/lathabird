import SeasonalTravelItem from "@/components/elements/SeasonalTravelItem";
import { notFound } from "next/navigation";

export default async function ItemGrid({
  seasonalTravelList,
}: {
  seasonalTravelList: any;
}) {
  const seasonalTravelListData = await seasonalTravelList;

  if (!seasonalTravelListData.ok) {
    return notFound();
  }

  return (
    <div className="wrapper relative">
      <div className="layout">
        {seasonalTravelListData.data.map((item: any) => {
          return <SeasonalTravelItem key={item.id} seasonalTravel={item} />;
        })}
      </div>
    </div>
  );
}
