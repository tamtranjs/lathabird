import { getBlogPostList } from "@/lib/contentful/getBlogPostList";
import BlogSection from "@/components/elements/BlogSection";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function DealHot() {
  const blogPosts = await getBlogPostList("all");
  return (
    <div className="wrapper mb-16 md:mb-24">
      <SectionTitle title="Deal hot" />
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}
