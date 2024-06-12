import { packages } from "@/lib/data";
import TourItem from "@/components/elements/TourItem";

export default function ToursPackages() {
  return (
    <div className="wrapper relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Tours Packages
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Planning for a trip? We will organize your trip with the best places
          and within best budget!
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-6 gap-6">
        {packages.map((item, index) => {
          return <TourItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
