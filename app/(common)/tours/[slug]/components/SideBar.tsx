import TourForm from "./TourForm";
import TourMap from "./TourMap";
export default function SideBar({ lat, lng }: { lat: number; lng: number }) {
  return (
    <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
      <TourForm />
      <TourMap lat={lat} lng={lng} />
    </div>
  );
}
