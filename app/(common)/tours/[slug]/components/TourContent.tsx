import { notFound } from "next/navigation";
import { getTourDetailAlpha } from "@/lib/contentful/tours/getTourDetail";
import HeadBackgroundAlpha from "./HeadBackgroundAlpha";
import ImageGridView from "./ImageGridView";

import TourExcerpt from "./TourExcerpt";
import TourSummary from "./TourSummary";
import Highlight from "./Highlight";
import DetailSchedule from "./DetailSchedule";
import Information from "./Information";

import PriceList from "./PriceList";
import TourSchedule from "./TourSchedule";
import TourTitle from "./TourTitle";

interface Props {
  slug: string;
}

export default async function TourContent({ tour }: any) {
  const {
    title,
    excerpt,
    photoList,
    backgroundImage,
    countriesRoute,
    citiesRoute,
    tourCode,
    duration,
    airline,
    highlight,
    detailedSchedule,
    information,
    priceList,
    tourSchedule,
  }: any = await tour;

  return (
    <>
      {/* <section className="relative md:py-24 py-16"> */}
      <TourTitle title={title} countriesRoute={countriesRoute} />
      <div className="wrapper">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="col-span-12">
            <ImageGridView photoList={photoList} />
            <TourExcerpt excerpt={excerpt} />

            <TourSummary
              title={title}
              countriesRoute={countriesRoute}
              citiesRoute={citiesRoute}
              tourCode={tourCode}
              duration={duration}
              airline={airline}
            />
            <PriceList content={priceList} />
            <TourSchedule content={tourSchedule} />
            <Highlight content={highlight} />
            <DetailSchedule content={detailedSchedule} />
            <Information content={information} />
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
