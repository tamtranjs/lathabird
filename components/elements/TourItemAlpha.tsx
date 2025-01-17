import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { trimExcerpt } from "@/lib/utils";

export default function TourItemAlpha(blogPost: any) {
  const { title, slug, excerpt, backgroundImage, countriesRoute } = blogPost;
  const expired = false;

  return (
    <div className="group relative overflow-hidden">
      <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800 h-52">
        <Image
          src={backgroundImage.url}
          className="group-hover:scale-110 group-hover:rotate-3 duration-500"
          width={backgroundImage.width}
          height={backgroundImage.height}
          alt={backgroundImage.fileName}
          style={{
            objectFit: "fill",
          }}
          quality={50}
          priority
        />
        <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
          {countriesRoute && (
            <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
              {countriesRoute}
            </span>
          )}
        </div>
        {expired && (
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-[#ad0303] text-white text-3xl px-2 py-2 opacity-40">
            <p>EXPIRED</p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <Link
          href={`/blogs/${slug}`}
          className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
        >
          {expired && (
            <span className="bg-[#ad0303] text-white text-sm mr-1 py-1">
              &nbsp;EXPIRED&nbsp;
            </span>
          )}
          {title}
        </Link>
        <p className="text-slate-400 mt-2">{trimExcerpt(excerpt)}</p>

        <div className="mt-3">
          <Link
            href={`/tours/${slug}`}
            className="hover:text-red-500 inline-flex items-center"
          >
            Read More <FiChevronRight className="size-4 ms-1"></FiChevronRight>
          </Link>
        </div>
      </div>
    </div>
  );
}
