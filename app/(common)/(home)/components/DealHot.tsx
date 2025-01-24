import { getBlogPostList } from "@/lib/contentful/getBlogPostList";
import BlogSection from "@/components/elements/BlogSection";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function DealHot() {
  const blogPosts = await getBlogPostList("all");
  return (
    <div className="wrapper mb-16 md:mb-16">
      <SectionTitle title="⚡ Deals Hot" />
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}
