import { getEntriesUrl } from "@/lib/const";
import { getTourObject } from "../utils";

export const getTourList = async () => {
  try {
    const response = await fetch(getEntriesUrl("tour"), {
      next: { revalidate: 60 },
    });

    const data = await response.json();
    if (data.items.length === 0) {
      return {
        ok: false,
        data: null,
      };
    } else {
      const items = data.items;
      const assets = data.includes.Asset;

      const tourList = items.map((item: any) => getTourObject(item, assets));
      return {
        ok: true,
        data: tourList,
      };
    }
  } catch (error) {
    console.log("Get Tour List Error", error);
    return {
      ok: false,
      data: null,
    };
  }
};
