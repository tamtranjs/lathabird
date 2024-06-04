import { getBlogData } from "@/lib/dataStore";
import BlogItem from "@/components/elements/BlogItem";
import { client } from "@/lib/contentful/client";

export default async function BlogGrid() {

  const blogDatas: Promise<Blog[]> = getBlogData();
  const blogs = await blogDatas;

  const blogPosts = await client.getEntries({
    content_type: "blog",
  });
  console.log("blogPosts", blogPosts);
  console.log("blogPosts", blogPosts.items[0]);

  return (
    <div className="wrapper relative">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {blogs.map((item, index) => {
          return (
            <BlogItem item={item} key={index} item2={blogPosts.items[index]}/>
          )
        })}

      </div>
    </div>
  )
}
