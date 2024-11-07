import { ENTRIES_URL } from "@/lib/const";
import { getBlogObject } from "./utils";

export const getBlogPostDetail = async (slug: string) => {
  const response = await fetch(ENTRIES_URL + `&fields.slug=${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();

  if (data.items.length === 0) {
    return null;
  } else {
    const item = data.items[0];
    const assets = data.includes.Asset;
    const entries = data.includes.Entry;

    return getBlogObject(item, assets, entries);
  }
};
