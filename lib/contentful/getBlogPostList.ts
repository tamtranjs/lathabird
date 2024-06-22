import { getBlogObject } from "./getBlogPostDetail";
import { ENTRIES_URL } from "@/lib/const";

export const getBlogPostList = async (blogType: string) => {
  let response: Response;
  if (blogType === "all") {
    response = await fetch(ENTRIES_URL, { next: { revalidate: 60 } });
  } else {
    response = await fetch(ENTRIES_URL + `&fields.blogType=${blogType}`, {
      next: { revalidate: 60 },
    });
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
