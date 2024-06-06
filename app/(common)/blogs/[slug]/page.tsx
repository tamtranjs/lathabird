import Link from "next/link";
import type { Metadata } from "next";
import { FaChevronRight } from "react-icons/fa";
import BlogContent from "./components/BlogContent";
import { Suspense } from "react";
import BlogIntro from "./components/BlogIntro";
import { getBlogPostDetail } from "@/lib/contentful/getBlogPostDetail";

interface Props {
  params: {
    slug: string;
  }
}

export async function generateMetadata(
  { params: { slug }}: Props
): Promise<Metadata> {

  const blogPost = await getBlogPostDetail(slug);

  if (!blogPost) {
    return {
      title: 'Page Not Found',
      description: 'Could not find requested resource',
    }
  }

  return {
    title: blogPost.title,
    description: blogPost.title,
  }
}

export default async function BlogDetail({ params: { slug }}: Props) {

  const blogPost: Promise<any> = getBlogPostDetail(slug);  

  return (
    <>
      <section className="relative table w-full items-center py-36 bg-[url('/images/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="wrapper relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <Suspense fallback={<h1>...Loading</h1>}>
              <BlogIntro blogPost={blogPost}/>
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
          <BlogContent
            blogPost={blogPost}
          />
        </Suspense>

      </section>
    </>
  )
}
