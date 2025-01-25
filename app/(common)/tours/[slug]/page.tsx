import type { Metadata } from "next";
import TourBody from "./components/TourBody";
import TourContent from "./components/TourContent";
import { getTourDetail } from "@/lib/contentful/tours/getTourDetail";
import { getTourDetailAlpha } from "@/lib/contentful/tours/getTourDetail";
import { Suspense } from "react";
import HeadBackgroundAlpha from "./components/HeadBackgroundAlpha";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const tour = await getTourDetailAlpha(slug);

  if (!tour.ok) {
    return {
      title: "Page Not Found",
      description: "Could not find requested resource",
    };
  }

  return {
    title: tour.data?.title,
    description: tour.data?.title,
  };
}

export default async function TourDetail({ params: { slug } }: Props) {
  const tour = await getTourDetailAlpha(slug);
  if (!tour) {
    return notFound();
  }

  const backgroundImageUrl: string = `${tour.data?.backgroundImage.url}`;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadBackgroundAlpha backgroundImageUrl={backgroundImageUrl} />
      </Suspense>
      <section className="relative">
        <Suspense fallback={<div>Loading...</div>}>
          <TourContent tour={tour.data} />
        </Suspense>
      </section>
    </>
  );
}
