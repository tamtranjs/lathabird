import Image from "next/image";
import BlogSideBar from "./BlogSideBar";
import TravelBlogs from "./TravelBlogs";
import RichText from "@/components/layouts/RichText";

interface Props {
  blogPost: any;
}

export default async function BlogContent(props: Props) {
  const blogPost = await props.blogPost;
  const { coverImage, expired } = blogPost;

  return (
    <div className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
            <div className="relative">
              <Image
                className="w-full"
                src={coverImage.url}
                alt={coverImage.fileName}
                width={coverImage.width}
                height={coverImage.height}
                priority
              />
              {expired && (
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-[#ad0303] text-white text-8xl px-2 py-2 opacity-40">
                  <p>EXPIRED</p>
                </div>
              )}
            </div>

            <div className="p-6 space-y-3">
              <RichText content={blogPost.content} />
            </div>
          </div>
        </div>
      </div>
      <TravelBlogs />
    </div>
  );
}
