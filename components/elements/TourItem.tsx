import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { FaStar, FaHeart, FaArrowRight } from "react-icons/fa";

export default function TourItem(item: any) {
  const imageObj = item.photoList[0];

  return (
    <div className="group rounded-md shadow dark:shadow-gray-700">
      <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2">
        <Image
          src={imageObj.url}
          className="scale-125 group-hover:scale-100 duration-500"
          alt={imageObj.fileName}
          width={imageObj.width}
          height={imageObj.height}
        />
        {item.label && (
          <div className="absolute top-0 start-0 p-4">
            <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
              {item.label}
            </span>
          </div>
        )}

        <div className="absolute top-0 end-0 p-4">
          <Link
            href="#"
            className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-primary dark:focus:text-primary hover:text-primary dark:hover:text-primary"
          >
            <FaHeart className="text-[20px] align-middle"></FaHeart>
          </Link>
        </div>
      </div>

      <div className="p-3">
        <dl>
          <dt className="sr-only">Location</dt>
          <dd>
            <p className="flex items-center text-slate-400 font-medium mb-2">
              <FiMapPin className="text-primary size-4 me-1"></FiMapPin>
              {item.place}
            </p>
          </dd>
        </dl>

        <Link
          href={`/tours/${item.slug}`}
          className="text-lg font-medium hover:text-primary duration-500 ease-in-out"
        >
          {item.title}
        </Link>

        <dl className="flex items-center mt-2">
          <dt className="sr-only">Rating</dt>
          <dd className="flex items-center dark:text-white text-sm">
            <FaStar className="align-middle mr-1 text-amber-400"></FaStar>
            <span className="text-sm">5.0 (30)</span>
          </dd>
        </dl>

        <div className="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
          <h5 className="text-lg font-medium text-primary">
            $ {item.costPerDay} / Day
          </h5>
          <Link
            href={`/tours/${item.slug}`}
            className="text-slate-400 hover:text-primary flex items-center"
          >
            <span>
              <FaArrowRight></FaArrowRight>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
