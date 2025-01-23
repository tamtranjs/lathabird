import BlogItemAlpha from "@/components/elements/BlogItemAlpha";
import { getBlogPostList } from "@/lib/contentful/getBlogPostList";

export default async function FlightGrid() {
  const blogPosts = await getBlogPostList("flight");

  return (
    <div className="wrapper relative">
      <div className="layout">
        {blogPosts &&
          blogPosts.map((item: any, index: number) => {
            return <BlogItemAlpha key={index} blogPost={item} />;
          })}
      </div>
    </div>
  );
}
