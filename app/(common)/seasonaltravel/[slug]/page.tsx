import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import { getBlogPostDetail } from "@/lib/contentful/getBlogPostDetail";
import HeadBackGround from "@/components/layouts/HeadBackGround";
import {
  getSeasonalTravelDetail,
  getBlogListBySeasonal,
} from "@/lib/contentful/seasonalTravel";
import { notFound } from "next/navigation";
import BlogItemAlpha from "@/components/elements/BlogItemAlpha";

interface Props {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "Seasonal Travel | Lathabird",
  description: "Blogs",
};

export default async function BlogList({ params: { slug } }: Props) {
  const seasonalTravel = await getSeasonalTravelDetail(slug);
  if (!seasonalTravel) {
    return notFound();
  }

  const blogList = await getBlogListBySeasonal(seasonalTravel?.data?.id);

  return (
    <>
      <HeadBackGround title="Seasonal Travel" name="Blogs" />
      <section className="wrapper relative md:py-24 py-16">
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <div className="layout">
            {blogList.ok &&
              blogList.data.map((item: any, index: number) => {
                return <BlogItemAlpha key={index} blogPost={item} />;
              })}
          </div>
        </Suspense>
      </section>
    </>
  );
}
