import BlogItemAlpha from "@/components/elements/BlogItemAlpha";

interface Blog {
  blogPosts: any;
}

export default async function BlogSection({ blogPosts }: Blog) {
  return (
    <div className="relative">
      <div className="layout">
        {blogPosts &&
          blogPosts.map((item: any, index: number) => {
            return <BlogItemAlpha key={index} blogPost={item} />;
          })}
      </div>
    </div>
  );
}
