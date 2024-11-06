import Link from "next/link";
import Image from "next/image";
import { topDestination } from "@/lib/data";
import SectionTitle from "@/components/elements/SectionTitle";

export default function Destinations() {
  return (
    <div className="wrapper">
      <SectionTitle title="Bạn muốn đi chơi đâu?" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative mt-6 gap-6">
        {topDestination.map((item, index) => {
          return (
            <div
              className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
              key={index}
            >
              <Image
                src={item.image}
                className="scale-125 group-hover:scale-100 duration-500 h-auto max-w-full"
                alt=""
                width={783}
                height={490}
              />
              <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute p-4 bottom-0 start-0">
                <Link
                  href="#"
                  className="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out"
                >
                  {item.place}
                </Link>
                <p className="text-white/70 group-hover:text-white text-sm duration-500">
                  {item.hotels}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
