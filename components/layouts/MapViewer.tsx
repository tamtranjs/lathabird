"use client";

import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  LoadScript,
} from "@react-google-maps/api";

interface MapComponentProps {
  lat: number;
  lng: number;
  markers?: { lat: number; lng: number; title?: string }[];
}

// const libraries = ["places"];

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, markers }) => {
  const apiKey = process.env.GOOGLE_API_KEY;

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: apiKey,
  //   // libraries: ["places"],
  // });

  // if (loadError) return <div>Error loading maps</div>;
  // if (!isLoaded) return <div>Loading maps...</div>;

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey={apiKey || ""}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        {/* {markers?.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))} */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
