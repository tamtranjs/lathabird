"use server";

import HeadBackGround from "@/components/layouts/HeadBackGround";
import { Suspense } from "react";
import SearchGrid from "./components/SearchGrid";

export default async function Search() {

  return (
    <>
      <HeadBackGround title="Search Results" name="Search" />
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchGrid />
        </Suspense>
      </section>
    </>
  );
}
