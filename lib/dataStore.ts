import { cache } from "react";

import { blogData } from './data';

export const getBlogData = cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [blogData[0]];
})

export const getBlogDetail = async (slug: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const blog = blogData.find(blog => blog.slug === slug);
  
  if (blog) {
    return blog;
  } else {
    return null;
  }
}