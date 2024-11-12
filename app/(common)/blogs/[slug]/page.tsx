import type { Metadata, ResolvingMetadata } from "next";
import BlogContent from "./components/BlogContent";
import { Suspense } from "react";
import { getBlogPostDetail } from "@/lib/contentful/getBlogPostDetail";
import HeadBackground from "./components/HeadBackground";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blogPost = await getBlogPostDetail(slug);

  if (!blogPost) {
    return {
      title: "Page Not Found",
      description: "Could not find requested resource",
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const { backgroundImage, title, excerpt } = blogPost;

  return {
    title: title,
    description: excerpt,
    openGraph: {
      title: title,
      description: excerpt,
      url: `https://${process.env.DOMAIN}/blogs/${slug}`,
      images: [
        {
          url: backgroundImage.url,
          width: backgroundImage.width,
          height: backgroundImage.height,
          alt: `${backgroundImage.fileName}`,
        },
        ...previousImages,
      ],
      type: "article",
      locale: "vi-VN",
    },
  };
}

export default async function BlogDetail({ params: { slug } }: Props) {
  const blogPost = await getBlogPostDetail(slug);
  if (!blogPost) {
    return notFound();
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadBackground blogPost={blogPost} />
      </Suspense>
      <section className="relative md:py-24 py-16">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent blogPost={blogPost} />
        </Suspense>
      </section>
    </>
  );
}
