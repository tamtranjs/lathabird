
import Link from "next/link";

export default async function notFound() {
  return (
    <section className="relative table w-full items-center py-36 bg-[url('/images/cta.jpg')] bg-top bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="wrapper relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h2 className="text-5xl leading-normal tracking-wider font-semibold text-white">Page Not Found</h2>
          <p className="text-2xl leading-normal tracking-wider font-semibold text-white">Could not find requested resource</p>
          <Link className="text-2xl leading-normal tracking-wider font-semibold text-white" href="/">Return Home</Link>
        </div>
      </div>
    </section>
  )
}
