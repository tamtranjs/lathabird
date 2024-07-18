import { getEntriesUrl } from "@/lib/const";
import { getBlogObject, getTourObject } from "../utils";

export const getTourDetail = async (slug: string) => {
  try {
    const response = await fetch(
      getEntriesUrl("tour") + `&fields.slug=${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    const data = await response.json();
    if (data.items.length === 0) {
      return {
        ok: false,
        data: null,
      };
    } else {
      const item = data.items[0];
      const assets = data.includes.Asset;

      const tourObject = getTourObject(item, assets);
      return {
        ok: true,
        data: tourObject,
      };
    }
  } catch (error) {
    console.log("Get Tour Detail Error", error);
    return {
      ok: false,
      data: null,
    };
  }
};
