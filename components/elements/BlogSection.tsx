import BlogItem from "@/components/elements/BlogItem";

interface Blog {
  blogPosts: any;
}

export default async function BlogSection({ blogPosts }: Blog) {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogPosts &&
          blogPosts.map((item: any, index: number) => {
            return <BlogItem key={index} blogPost={item} />;
          })}
      </div>
    </div>
  );
}
