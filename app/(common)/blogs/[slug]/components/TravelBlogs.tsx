import BlogItem from "@/components/elements/BlogItem";
import { getBlogPostList } from "@/lib/contentful/getBlogPostList";

export default async function TravelBlogs() {

  const blogData = await getBlogPostList();

  return (
    <div className="relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Travel Blogs</h3>
        <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        {blogData.slice(0, 3).map((item: any, index: number) => {
          return (
            <BlogItem key={index} blogPost={item} />
          )
        })}
      </div>
    </div>
  )
}
