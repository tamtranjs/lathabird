import { packages } from "@/lib/data";
import TourItem from "@/components/elements/TourItem";

export default function TourGrid() {
  return (
    <div className="wrapper relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((item, index) => {
          return <TourItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
