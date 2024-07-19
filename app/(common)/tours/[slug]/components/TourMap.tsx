import GoogleMapIframe from "@/components/layouts/GoogleMapIframe";

export default function TourMap() {
  return (
    <div className="mt-6">
      <h5 className="text-lg font-medium">Tour Map</h5>

      <div className="mt-3">
        <GoogleMapIframe
          className="w-full h-[300px] rounded-full"
          lat={21.4747}
          lng={105.5708}
        />
      </div>
    </div>
  );
}
