
import Link from "next/link";

export default async function notFound() {
  return (
    <section className="relative table w-full items-center py-36 bg-gray-500 bg-top bg-no-repeat bg-cover">
      <div className="wrapper relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h2 className="text-5xl leading-normal tracking-wider font-semibold text-[#030818]">Page Not Found</h2>
          <p className="text-2xl leading-normal tracking-wider font-semibold text-[#030818]">Could not find requested resource</p>
          <Link className="text-2xl leading-normal tracking-wider font-semibold text-[#030818" href="/">Return Home</Link>
        </div>
      </div>
    </section>
  )
}
