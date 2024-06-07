import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Suspense } from "react";

import BlogGrid from "./components/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel News & Tips | Lathabird",
  description: "Blogs",
}

export default async function Blogs() {
  return (
    <>
      <section className="relative table w-full items-center py-36 bg-[url('/images/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="wrapper relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Blogs / News</h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 flex items-center justify-center">
            <li className="uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Home</Link></li>
            <li className="text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <FaChevronRight />
            </li>
            <li className="uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<h2>Loading ...</h2>}>
          <BlogGrid />
        </Suspense>
      </section>
    </>
  )
}
