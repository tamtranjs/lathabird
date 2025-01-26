"use server";

import { getEntriesUrl } from "@/lib/const";
import { getPhotoObject } from "../utils";

export const getImageList = async () => {
  try {
    const response = await fetch(getEntriesUrl("webPhotos"), {
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

      const tourList = items.map((item: any) => getPhotoObject(item, assets));
      return {
        ok: true,
        data: tourList[0],
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
