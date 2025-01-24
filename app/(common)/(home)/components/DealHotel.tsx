import { getBlogPostList } from "@/lib/contentful/getBlogPostList";
import BlogSection from "@/components/elements/BlogSection";
import SectionTitle from "@/components/elements/SectionTitle";

export default async function DealHotel() {
  const blogPosts = await getBlogPostList("hotel");
  return (
    <div className="bg-[#f5f9ff] py-8 mb-16 md:mb-16">
      <div className="wrapper">
        <SectionTitle title="Deals Khách Sạn" />
        <BlogSection blogPosts={blogPosts} />
      </div>
    </div>
  );
}
