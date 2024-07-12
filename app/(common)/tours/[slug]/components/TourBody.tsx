import { notFound } from "next/navigation";
import { getTourDetail } from "@/lib/contentful/tours/getTourDetail";
import HeadBackground from "./HeadBackground";
import SideMap from "./SideMap";
import TourContent from "./TourContent";

interface Props {
  slug: string;
}

export default async function TourBody(props: Props) {
  const { slug } = props;
  const tour = await getTourDetail(slug);

  if (!tour.ok) {
    return notFound();
  }

  return (
    <>
      <HeadBackground tour={tour} />
      <section className="relative md:py-24 py-16">
        <div className="wrapper">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <TourContent />
            <SideMap />
          </div>
        </div>
      </section>
    </>
  );
}
