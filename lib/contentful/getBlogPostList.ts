import { cache } from "react";
import { client } from "./client";

export const getBlogPostList = cache(async() => {

  const res = client.getEntries({
    content_type: "blog",
  });
  
  const data = await res;
  if (data.items.length === 0) {
    return [];
  }

  const blogPosts = data.items.map((item: any): BlogPost => {
    const { id, title, slug, excerpt, tag, coverImage } = item.fields;
    const coverImageUrl = `https://${coverImage.fields.file.url.slice(2)}`;
    return {
      id,
      title,
      slug,
      excerpt,
      tag,
      coverImage: coverImageUrl,
    }
  })

  return blogPosts;

})
