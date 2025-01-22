import BlogItem from "@/components/elements/BlogItem";
import { getBlogPostList } from "@/lib/contentful/getBlogPostList";

export default async function BlogGrid() {
  const blogPosts = await getBlogPostList("all");

  return (
    <div className="wrapper relative">
      <div className="layout">
        {blogPosts &&
          blogPosts.map((item: any, index: number) => {
            return <BlogItem key={index} blogPost={item} />;
          })}
      </div>
    </div>
  );
}
