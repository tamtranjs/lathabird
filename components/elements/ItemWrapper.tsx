import Link from "next/link";
import Image from "next/image";

export default function ItemWrapper({
  type,
  slug,
  tag,
  expired,
  image,
  children,
}: {
  type: string;
  tag?: string;
  slug: string;
  expired?: string;
  image: any;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/${type}/${slug}`}
      className="group flex flex-col relative text-[#2b2c2d] h-full border border-[#e5e5e6] rounded-sm overflow-hidden hover:border-[#87878ca1]"
    >
      <div className="relative w-full min-h-[140px] max-h-[320px] aspect-[16/9]">
        <span className="box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 absolute inset-0">
          <div className="h-full relative overflow-hidden ease-in-out duration-300 group-hover:scale-105">
            <Image
              className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover object-center"
              src={image.url}
              alt={image.fileName}
              width={image.width}
              height={image.height}
            />
            <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
              {tag && (
                <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                  {tag}
                </span>
              )}
            </div>
            {expired && (
              <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-[#ad0303] text-white text-3xl px-2 py-2 opacity-40">
                <p>EXPIRED</p>
              </div>
            )}
          </div>
        </span>
      </div>

      <div className="flex flex-col justify-start flex-grow gap-1 p-4 pb-10 bg-[#fff]">
        {children}
      </div>
    </Link>
  );
}
