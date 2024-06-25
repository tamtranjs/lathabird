import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiClock } from "react-icons/fi";

interface Props {
  blogPost: any;
}

export default function BlogItem({ blogPost }: Props) {

  const { tag, slug, excerpt, title, coverImage, timeToRead, author } = blogPost;

  return (
    <div className="group relative overflow-hidden">
      <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
        <Image
          src={coverImage.url}
          className="group-hover:scale-110 group-hover:rotate-3 duration-500 h-52 object-cover"
          width={coverImage.width}
          height={coverImage.height}
          alt={coverImage.fileName}
        />
        <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
          {tag && <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{tag}</span>}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex mb-4">
          <span className="flex items-center text-slate-400 text-sm">
            <FiClock className="size-4 text-slate-900 dark:text-white me-1.5"></FiClock>
            {timeToRead ? `${timeToRead} min read by` : "5 min read by"}
            <span className="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">&nbsp;{author.name}</span>
          </span>
        </div>
        <Link href={`/blogs/${slug}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{title}</Link>
        <p className="text-slate-400 mt-2">{excerpt}</p>

        <div className="mt-3">
          <Link href={`/blogs/${slug}`} className="hover:text-red-500 inline-flex items-center">Read More <FiChevronRight className="size-4 ms-1"></FiChevronRight></Link>
        </div>
      </div>
    </div>
  )
}
