import BlogItem from "@/components/elements/BlogItem";

interface Blog {
  blogPosts: any;
}

export default async function BlogSection({ blogPosts }: Blog) {
  return (
    <div className="relative">
      <div className="layout">
        {blogPosts &&
          blogPosts.map((item: any, index: number) => {
            return <BlogItem key={index} blogPost={item} />;
          })}
      </div>
    </div>
  );
}
