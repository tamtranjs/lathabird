import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionTitle from "@/components/elements/SectionTitle";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

import { ClientData, Client } from "@/lib/data";
import Image from "next/image";

export const Clients = async () => {
  const renderCard = (item: Client) => {
    return (
      <div className="text-center">
        <div className="cursor-e-resize">
          <div className="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900">
            <div className="flex justify-center">
              <FaQuoteLeft className="w-7 h-auto text-primary" />
            </div>
            <p className="text-slate-400 mt-3">{item.desc}</p>
            <ul className="list-none mb-0 text-amber-400 mt-3 flex justify-center gap-1">
              <li className="inline">
                <FaStar />
              </li>
              <li className="inline">
                <FaStar />
              </li>
              <li className="inline">
                <FaStar />
              </li>
              <li className="inline">
                <FaStar />
              </li>
              <li className="inline">
                <FaStar />
              </li>
            </ul>
          </div>

          <div className="text-center mt-5">
            <Image
              src={item.image}
              width={100}
              height={100}
              className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
              alt={`Client ${item.name}`}
            />
            <h6 className="mt-2 font-semibold">{item.name}</h6>
            <span className="text-slate-400 text-sm">{item.possition}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="wrapper relative md:mt-24 mt-16">
      <SectionTitle title="Phản hồi từ người dùng của chúng tôi" />
      <Carousel className="w-full mt-6">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">{renderCard(ClientData[index])}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative flex justify-center gap-2 -bottom-7">
          <CarouselPrevious className="relative left-0" />
          <CarouselNext className="relative right-0" />
        </div>
      </Carousel>
    </div>
  );
};
