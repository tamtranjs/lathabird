import React from "react";

export default function TourTitle({
  title,
  countriesRoute,
}: {
  title: string;
  countriesRoute: string;
}) {
  return (
    <div className="wrapper relative mt-[-172px]">
      <div className="bg-white grid p-8 grid-cols-1 pb-8 text-center mt-10 rounded-t">
        <h1 className="text-2xl leading-normal tracking-wider font-semibold text-black">
          {title}
        </h1>
        <h2 className="text-2xl font-semibold">{countriesRoute}</h2>
      </div>
    </div>
  );
}
