import Link from "next/link";
import Image from "next/image";

import { getSeasonalTravelList } from "@/lib/contentful/seasonalTravel";
import SectionTitle from "@/components/elements/SectionTitle";
import SeasonalTravelItem from "@/components/elements/SeasonalTravelItem";

export default async function Destinations() {
  const seasonalTravelList = await getSeasonalTravelList();

  return (
    <div className="wrapper mb-16 md:mb-16">
      <SectionTitle title="Du Lịch Theo Mùa" />
      <div className="layout">
        {seasonalTravelList.ok &&
          seasonalTravelList.data.map((item: any) => {
            return <SeasonalTravelItem key={item.id} seasonalTravel={item} />;
          })}
      </div>
    </div>
  );
}
