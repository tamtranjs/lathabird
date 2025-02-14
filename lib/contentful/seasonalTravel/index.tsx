import { getEntriesUrl } from "@/lib/const";
import { getBlogObject, getSeasonalTravelObject } from ".././utils";

export const getSeasonalTravelList = async () => {
  try {
    const response = await fetch(getEntriesUrl("seasonalTravel"), {
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

      const seasonalTravelList = items.map((item: any) =>
        getSeasonalTravelObject(item, assets)
      );
      return {
        ok: true,
        data: seasonalTravelList,
      };
    }
  } catch (error) {
    console.log("Get List Error", error);
    return {
      ok: false,
      data: null,
    };
  }
};

export const getSeasonalTravelDetail = async (slug: string) => {
  const response = await fetch(
    getEntriesUrl("seasonalTravel") + `&fields.slug=${slug}`,
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

    return {
      ok: true,
      data: getSeasonalTravelObject(item, assets),
    };
  }
};

export const getBlogListBySeasonal = async (seasonalTravelId: string) => {
  try {
    const response = await fetch(
      getEntriesUrl("blog") +
        `&fields.seasonalTravel.sys.id=${seasonalTravelId}`,
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
      const items = data.items;
      const assets = data.includes.Asset;
      const entries = data.includes.Entry;

      const blogList = items.map((item: any) =>
        getBlogObject(item, assets, entries)
      );
      return {
        ok: true,
        data: blogList,
      };
    }
  } catch (error) {
    console.log("getBlogListBySeasonal Error", error);
    return {
      ok: false,
      data: null,
    };
  }
};
