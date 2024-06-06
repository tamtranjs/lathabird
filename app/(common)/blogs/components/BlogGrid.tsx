import BlogItem from "@/components/elements/BlogItem";
import { getBlogPostList } from "@/lib/contentful/getBlogPostList";

export default async function BlogGrid() {

  const blogPosts = await getBlogPostList();

  return (
    <div className="wrapper relative">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {blogPosts && blogPosts.map((item: any, index: number) => {
          return (
            <BlogItem key={index} blogPost={item}/>
          )
        })}
      </div>
    </div>
  )
}
