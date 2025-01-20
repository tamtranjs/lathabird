import { getEntriesUrl } from "@/lib/const";
import { getTourObject, getTourObjectAlpha } from "../utils";

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

export const getTourDetailAlpha = async (slug: string) => {
  try {
    const response = await fetch(
      getEntriesUrl("tours") + `&fields.slug=${slug}`,
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

      const tourObject = getTourObjectAlpha(item, assets);
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
