import TourItem from "@/components/elements/TourItem";
import { getTourList } from "@/lib/contentful/tours/getTourList";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function ToursPackages() {
  const tourList = await getTourList();

  return (
    <div className="wrapper relative md:mt-24 mt-16">
      <SectionTitle title="Các gói tour" />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-6 gap-6">
        {tourList.ok &&
          tourList.data.map((item: any) => {
            return <TourItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
}
