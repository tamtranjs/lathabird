
import Image from "next/image";
import BlogSideBar from "./BlogSideBar";
import TravelBlogs from "./TravelBlogs";
import RichText from "./RichText";

interface Props {
  blogPost: Promise<any | null>;
}

export default async function BlogContent(props: Props) {

  const blogPost = await props.blogPost;

  return (
    <div className="wrapper">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div className="lg:col-span-8 md:col-span-6">
          <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
            <Image
              src={blogPost.coverImage}
              alt=""
              width={1200}
              height={800}
            />
            <div className="p-6 space-y-3">
              <RichText content={blogPost.content} />
            </div>
          </div>
        </div>
        <BlogSideBar authorData={blogPost?.author}/>
      </div>
      <TravelBlogs />
    </div>
  )
}
