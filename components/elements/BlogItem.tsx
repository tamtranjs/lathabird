import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiClock } from "react-icons/fi";

interface Props {
  item: Blog;
  item2?: any;
}

export default function BlogItem({ item, item2 }: Props) {

  console.log("item", item);
  console.log("item2", item2);

  return (
    <div className="group relative overflow-hidden">
      <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
        <Image
          // src={item.image}
          src={"/images/blog/1.jpg"}
          className="group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""
          width={1200}
          height={800}
        />
        <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
          <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tag}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex mb-4">
          <span className="flex items-center text-slate-400 text-sm"><FiClock className="size-4 text-slate-900 dark:text-white me-1.5"></FiClock>5 min read</span>
          <span className="text-slate-400 text-sm ms-3">by <Link href="" className="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">Travosy</Link></span>
        </div>

        <Link href={`/blogs/${item.slug}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{item.title}</Link>
        <p className="text-slate-400 mt-2">{item.desc}</p>

        <div className="mt-3">
          <Link href={`/blogs/${item.slug}`} className="hover:text-red-500 inline-flex items-center">Read More <FiChevronRight className="size-4 ms-1"></FiChevronRight></Link>
        </div>
      </div>
    </div>
  )
}
