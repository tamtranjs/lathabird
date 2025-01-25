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
import IntroBox from "@/components/elements/IntroBox";
import { FaFacebookMessenger } from "react-icons/fa";

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
      <IntroBox>
        <h1 className="text-2xl leading-normal tracking-wider font-semibold text-black">
          {title}
        </h1>
        <h2 className="text-2xl font-semibold">{countriesRoute}</h2>
      </IntroBox>
      <div className="wrapper pb-16">
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
            <div className="wrapper flex justify-center">
              <a
                href="https://m.me/lathabird" // 🔹 Replace with your actual Messenger link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-3 rounded shadow-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
              >
                <FaFacebookMessenger className="w-6 h-6" />
                <span className="font-medium">Liên hệ qua Messenger</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* </section> */}
    </>
  );
}
