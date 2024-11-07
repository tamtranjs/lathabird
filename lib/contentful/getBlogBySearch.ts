"use server";

import { getEntriesUrl } from "@/lib/const";
import { removeDuplicates, checkIfAllDatesArePast } from "@/lib/utils";
import { getBlogObject } from "./utils";

const getMatchingBlogs = async (cityList: string[], field: string) => {
  try {
    const response = await Promise.all(
      cityList.map((city) =>
        fetch(getEntriesUrl("blog") + `&fields.${field}[match]=${city}`)
      )
    );

    const dataRes = await Promise.all(response.map((res) => res.json()));
    return dataRes.flatMap((data: any) =>
      data.items.map((item: any) => {
        const assets = data.includes.Asset;
        const entries = data.includes.Entry;
        return getBlogObject(item, assets, entries);
      })
    );
  } catch (error) {
    console.log("Error in getMatchingBlogs", error);
    return [];
  }
};

export const findMatchingBlogs = async (
  fromList: string[],
  toList: string[],
  dateList: string[],
  showDealPast: boolean = true
) => {
  const fromBlogs = await getMatchingBlogs(fromList, "depart");
  const toBlogs = await getMatchingBlogs(toList, "arrive");

  let matchingBlogs = [];
  if (fromList.length > 0 && toList.length === 0) {
    matchingBlogs = fromBlogs;
  } else if (fromList.length === 0 && toList.length > 0) {
    matchingBlogs = toBlogs;
  } else {
    matchingBlogs = fromBlogs.filter((fromBlog) => {
      return toBlogs.some((toBlog) => toBlog.id === fromBlog.id);
    });
  }

  if (dateList.length > 0) {
    const datesBlogs = await getMatchingBlogs(dateList, "availableDates");
    if (datesBlogs.length > 0) {
      matchingBlogs = matchingBlogs.filter((blog) => {
        return datesBlogs.some((dateBlog) => dateBlog.id === blog.id);
      });
    } else {
      matchingBlogs = [];
    }
  }

  if (!showDealPast) {
    matchingBlogs = matchingBlogs.filter((blog) => {
      if (blog.availableDates) {
        return !checkIfAllDatesArePast(blog.availableDates);
      } else {
        return false;
      }
    });
  }

  return removeDuplicates(matchingBlogs);
};
