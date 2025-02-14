import Image from "next/image";
import Link from "next/link";

export default function SeasonalTravelItem({ seasonalTravel }: any) {
  return (
    <Link
      href={`/seasonaltravel/${seasonalTravel.slug}`}
      className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
    >
      <Image
        src={seasonalTravel.image.url}
        className="scale-125 group-hover:scale-100 duration-500 h-auto max-w-full"
        alt=""
        width={seasonalTravel.image.width}
        height={seasonalTravel.image.height}
      />
      <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
      <div className="absolute p-4 bottom-0 start-0">
        <p className="text-lg font-medium text-white duration-500 ease-in-out">
          {seasonalTravel.title}
        </p>
      </div>
    </Link>
  );
}
