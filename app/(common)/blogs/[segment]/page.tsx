import Link from "next/link";
import type { Metadata } from "next";
import { FaChevronRight } from "react-icons/fa";
import BlogContent from "./components/BlogContent";
import { getBlogDetail } from "@/lib/dataStore";
import { Suspense } from "react";
import BlogIntro from "./components/BlogIntro";

interface Props {
  params: {
    segment: string;
  }
}

export async function generateMetadata(
  { params: { segment }}: Props
):Promise<Metadata> {

  const blogData: Promise<Blog | null> = getBlogDetail(segment);
  const data = await blogData;

  if (!data) {
    return {
      title: 'Page Not Found',
      description: 'Could not find requested resource',
    }
  }

  return {
    title: data.title,
    description: data.title,
  }
}

export default function BlogDetail({ params: { segment }}: Props) {

  const blogData: Promise<Blog | null> = getBlogDetail(segment);

  return (
    <>
      <section className="relative table w-full items-center py-36 bg-[url('/images/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="wrapper relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <Suspense fallback={<h1>...Loading</h1>}>
              <BlogIntro blogData={blogData}/>
            </Suspense>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 flex items-center justify-center">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Home</Link></li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <FaChevronRight />
            </li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blog Detail</li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent blogData={blogData}/>
        </Suspense>

      </section>
    </>
  )
}
