import TourForm from "./TourForm";
import TourMap from "./TourMap";
export default function SideBar() {
  return (
    <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
      <TourForm />
      <TourMap />
    </div>
  );
}
