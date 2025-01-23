import Image from "next/image";
import Link from "next/link";
import { capitalizeWords } from "@/lib/utils";
import ItemWrapper from "./ItemWrapper";

export default function TourItemBeta({ tour }: any) {
  return (
    <ItemWrapper type="tours" image={tour.backgroundImage} slug={tour.slug}>
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
    </ItemWrapper>
  );
}
