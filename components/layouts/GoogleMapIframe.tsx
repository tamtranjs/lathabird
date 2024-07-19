"use server";

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}

const GoogleMapIframe: React.FC<MapProps> = ({
  lat,
  lng,
  zoom = 12,
  className,
}) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`;

  return (
    <iframe
      className={className}
      // loading="lazy"
      allowFullScreen
      src={mapUrl}
      title="Google Maps Location"
      sandbox="allow-scripts allow-same-origin"
    />
  );
};

export default GoogleMapIframe;
