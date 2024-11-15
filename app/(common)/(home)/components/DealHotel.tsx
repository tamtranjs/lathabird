import { getBlogPostList } from "@/lib/contentful/getBlogPostList";
import BlogSection from "@/components/elements/BlogSection";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function DealHotel() {
  const blogPosts = await getBlogPostList("hotel");
  return (
    <div className="wrapper mb-16 md:mb-24">
      <SectionTitle title="Deals dịch vụ khách sạn" />
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}
