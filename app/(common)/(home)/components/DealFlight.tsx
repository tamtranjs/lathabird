import { getBlogPostList } from "@/lib/contentful/getBlogPostList";
import BlogSection from "@/components/elements/BlogSection";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function DealFlight() {
  const blogPosts = await getBlogPostList("flight");
  return (
    <div className="wrapper mb-16 md:mb-24">
      <SectionTitle title="Deals chuyến bay" />
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}
