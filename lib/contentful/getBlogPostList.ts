import { getBlogObject } from "./getBlogPostDetail";
import { entriesUrl } from "@/lib/const";

export const getBlogPostList = async (blogType: string) => {
  let response: Response;
  if (blogType === "all") {
    response = await fetch(entriesUrl);
  } else {
    response = await fetch(entriesUrl + `&fields.blogType=${blogType}`);
  }

  const data = await response.json();

  if (data.items.length === 0) {
    return [];
  } else {
    return data.items.map((item: any) =>
      getBlogObject(item, data.includes.Asset, data.includes.Entry)
    );
  }
};
