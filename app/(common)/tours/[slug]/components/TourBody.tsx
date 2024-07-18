import { notFound } from "next/navigation";
import { getTourDetail } from "@/lib/contentful/tours/getTourDetail";
import HeadBackground from "./HeadBackground";
import ImageGridView from "./ImageGridView";
import TourInfo from "./TourInfo";
import { pick } from "lodash";
import TourDescription from "./TourDescription";
import SideBar from "./SideBar";

interface Props {
  slug: string;
}

export default async function TourBody(props: Props) {
  const { slug } = props;

  const tourObj = await getTourDetail(slug);
  if (!tourObj.ok) {
    return notFound();
  }

  const { title, photoList }: any = tourObj.data;
  const tourInfo: any = pick(tourObj.data, [
    "title",
    "place",
    "duration",
    "activityType",
    "groupSize",
    "language",
    "costPerDay",
  ]);

  const tourDescription = tourObj.data?.tourDescription;

  return (
    <>
      <HeadBackground title={title} backgroundPhoto={photoList[0].url} />
      <section className="relative md:py-24 py-16">
        <div className="wrapper">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="md:col-span-6 lg:col-span-8">
              <ImageGridView photoList={photoList} />
              <TourInfo tourInfo={tourInfo} />
              <TourDescription description={tourDescription} />
            </div>
            <div className="md:col-span-5 lg:col-span-4">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
