import Image from "next/image";
import Link from "next/link";
import { capitalizeWords } from "@/lib/utils";

export default function TourItemBeta({ tour }: any) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col relative text-[#2b2c2d] h-full border border-[#e5e5e6] rounded-sm overflow-hidden hover:border-[#87878ca1]"
    >
      <div className="relative w-full min-h-[140px] max-h-[320px] aspect-[16/9]">
        <span className="box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 absolute inset-0">
          <div className="h-full relative overflow-hidden ease-in-out duration-300 group-hover:scale-105">
            <Image
              className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover object-center"
              src={tour.backgroundImage.url}
              alt={tour.backgroundImage.fileName}
              width={tour.backgroundImage.width}
              height={tour.backgroundImage.height}
            />
          </div>
        </span>
      </div>

      <div className="flex flex-col justify-start flex-grow gap-1 p-4 pb-10 bg-[#fff]">
        <h6 className="font-semibold tracking-[0.48px]">
          {capitalizeWords(tour.title)}
        </h6>
        <div className="text-[#757575] font-normal mt-1 text-sm">
          <p>{capitalizeWords(tour.duration)}</p>
          <p>{capitalizeWords(tour.countriesRoute)}</p>
          <p>
            Từ <span className="text-secondary">{tour.lowestPrice} VND</span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
}
