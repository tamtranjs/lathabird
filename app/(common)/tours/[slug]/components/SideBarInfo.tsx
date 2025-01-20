import TourSummary from "./TourSummary";
export default function SideBarInfo({ data }: { data: any }) {
  return (
    <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
      <TourSummary
        title={data.title}
        countriesRoute={data.countriesRoute}
        citiesRoute={data.citiesRoute}
        tourCode={data.tourCode}
        duration={data.duration}
        airline={data.airline}
      />
    </div>
  );
}
