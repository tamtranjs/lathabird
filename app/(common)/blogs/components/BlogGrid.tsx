import { getBlogData } from "@/lib/dataStore";
import BlogItem from "@/components/elements/BlogItem";

export default async function BlogGrid() {

  const blogDatas: Promise<Blog[]> = getBlogData();
  const blogs = await blogDatas;

  return (
    <div className="wrapper relative">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {blogs.map((item, index) => {
          return (
            <BlogItem item={item} key={index} />
          )
        })}

      </div>
    </div>
  )
}
