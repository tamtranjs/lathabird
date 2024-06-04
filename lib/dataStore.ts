import { blogData } from './data';

export const getBlogData = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return blogData;
}

export const getBlogDetail = async (slug: string) => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  const blog = blogData.find(blog => blog.slug === slug);

  if (blog) {
    return blog;
  } else {
    return null;
  }
}