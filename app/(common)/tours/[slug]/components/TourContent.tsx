import { notFound } from "next/navigation";
import { getTourDetailAlpha } from "@/lib/contentful/tours/getTourDetail";
import HeadBackground from "./HeadBackground";
import ImageGridView from "./ImageGridView";

import TourExcerpt from "./TourExcerpt";
import TourSummary from "./TourSummary";
import Highlight from "./Highlight";
import DetailSchedule from "./DetailSchedule";
import Information from "./Information";

import PriceList from "./PriceList";
import TourSchedule from "./TourSchedule";

interface Props {
  slug: string;
}

export default async function TourContent(props: Props) {
  const { slug } = props;

  const tourObjAlpha = await getTourDetailAlpha(slug);

  if (!tourObjAlpha.ok) {
    return notFound();
  }

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
  }: any = tourObjAlpha.data;

  return (
    <>
      <HeadBackground title={title} backgroundPhoto={backgroundImage.url} />
      <section className="relative md:py-24 py-16">
        <div className="wrapper">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="md:col-span-6 lg:col-span-8">
              <TourExcerpt excerpt={excerpt} />
              <ImageGridView photoList={photoList} />
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
            <div className="md:col-span-5 lg:col-span-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}
