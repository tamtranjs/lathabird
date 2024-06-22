import { Suspense } from "react";

import BlogGrid from "./components/BlogGrid";
import type { Metadata } from "next";
import HeadBackGround from "@/components/layouts/HeadBackGround";

export const metadata: Metadata = {
  title: "Travel News & Tips | Lathabird",
  description: "Blogs",
}

export default async function Blogs() {
  return (
    <>
      <HeadBackGround
        title="Blogs / News"
        name="Blogs"
      />
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<h2 className="text-center">Loading ...</h2>}>
          <BlogGrid />
        </Suspense>
      </section>
    </>
  )
}
