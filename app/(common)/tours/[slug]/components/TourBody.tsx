import { notFound } from "next/navigation";
import { getTourDetail } from "@/lib/contentful/tours/getTourDetail";
import HeadBackground from "./HeadBackground";
import SideMap from "./SideMap";
import ImageGridView from "./ImageGridView";
import TourInfo from "./TourInfo";
import { pick } from "lodash";

interface Props {
  slug: string;
}

export default async function TourBody(props: Props) {
  const { slug } = props;
  const tour = await getTourDetail(slug);

  if (!tour.ok) {
    return notFound();
  }

  const imageList = tour.data.imageList;
  const tourInfo = pick(tour.data, [
    "title",
    "place",
    "duration",
    "type",
    "groupSize",
    "language",
    "feePerDayOnePerson",
  ]);

  return (
    <>
      <HeadBackground tour={tour} />
      <section className="relative md:py-24 py-16">
        <div className="wrapper">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-8 md:col-span-6">
              <ImageGridView imageList={imageList}/>
              <TourInfo tourInfo={tourInfo} />
            </div>

            <SideMap />
          </div>
        </div>
      </section>
    </>
  );
}
