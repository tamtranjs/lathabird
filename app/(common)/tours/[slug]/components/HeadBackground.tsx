import { Suspense } from 'react';
// import BlogIntro from "./BlogIntro";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

interface Props {
  tour: any
}

export default async function HeadBackground(props: Props) {

  const tour = await props.tour;
  const { title, bgUrl } = tour.data;

  return (
    <section
      className="relative table w-full items-center py-36 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="wrapper relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">{title}</h1>
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
  )
}