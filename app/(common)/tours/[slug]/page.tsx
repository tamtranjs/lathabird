import type { Metadata } from "next";
import TourBody from "./components/TourBody";
import { getTourDetail } from "@/lib/contentful/tours/getTourDetail";
import { Suspense } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const tour = await getTourDetail(slug);

  if (!tour.ok) {
    return {
      title: "Page Not Found",
      description: "Could not find requested resource",
    };
  }

  return {
    title: tour.data.title,
    description: tour.data.title,
  };
}

export default async function TourDetail({ params: { slug } }: Props) {
  return (
    <>
      <Suspense fallback={<h1>Loading..</h1>}>
        <TourBody slug={slug} />
      </Suspense>
    </>
  );
}
