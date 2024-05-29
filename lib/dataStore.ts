import { blogData } from './data';

export const getBlogData = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return blogData;
}