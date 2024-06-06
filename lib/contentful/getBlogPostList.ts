import { cache } from "react";
import { getBlogObject } from "./getBlogPostDetail";

export const getBlogPostList = cache(async() => {

  const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blog`);
  const data = await response.json();
  
  if (data.items.length === 0) {
    return [];
  } else {
    return data.items.map((item: any) =>
      getBlogObject(item, data.includes.Asset, data.includes.Entry));
  }
})
