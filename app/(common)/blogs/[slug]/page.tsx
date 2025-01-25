import type { Metadata, ResolvingMetadata } from "next";
import BlogContent from "./components/BlogContent";
import { Suspense } from "react";
import { getBlogPostDetail } from "@/lib/contentful/getBlogPostDetail";
import { notFound } from "next/navigation";
import HeadBackgroundAlpha from "../../tours/[slug]/components/HeadBackgroundAlpha";

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

  if (!blogPost.ok) {
    return {
      title: "Page Not Found",
      description: "Could not find requested resource",
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // const { backgroundImage, title, excerpt } = blogPost;
  const { backgroundImage, title, excerpt } = blogPost.data || {};

  return {
    title: title,
    description: excerpt,
    openGraph: {
      title: title,
      description: excerpt,
      url: `https://${process.env.DOMAIN}/blogs/${slug}`,
      images: [
        {
          url: backgroundImage?.url || "",
          width: backgroundImage?.width || "",
          height: backgroundImage?.height || "",
          alt: `${backgroundImage?.fileName}`,
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

  const backgroundImageUrl: string = `${blogPost.data?.backgroundImage.url}`;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadBackgroundAlpha backgroundImageUrl={backgroundImageUrl} />
      </Suspense>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent blogPost={blogPost.data} />
        </Suspense>
      </section>
    </>
  );
}
