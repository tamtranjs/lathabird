import { blogData } from "@/lib/data"
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import BlogContent from "./components/BlogContent";

export default async function BlogDetail() {

  const data = blogData[0];

  return (
    <>
      <section className="relative table w-full items-center py-36 bg-[url('/images/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="wrapper relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">{data?.title ? data.title : 'Traveller Visiting Ice Cave With Amazing Eye-catching Scenes'}</h3>

            <ul className="list-none mt-6">
              <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Author :</span> <span className="block">Travosy</span></li>
              <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">{data?.date ? data.date : '19th June 2024'}</span></li>
              <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
            </ul>
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
        <BlogContent data={data}/>
      </section>
    </>
  )
}
