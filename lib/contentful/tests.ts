"use server";

import { getEntriesUrl } from "@/lib/const";
import { removeDuplicates, checkIfAllDatesArePast } from "@/lib/utils";

const getMatchingBlogs = async (cityList: string[], field: string) => {
  const response = await Promise.all(
    cityList.map((city) =>
      fetch(getEntriesUrl("test") + `&fields.${field}[match]=${city}`)
    )
  );

  const data = await Promise.all(response.map((res) => res.json()));
  return data.flatMap((item: any) =>
    item.items.map((item: any) => {
      return {
        id: item.sys.id,
        ...item.fields,
      };
    })
  );
};

export const getBlogs = async (
  fromList: string[],
  toList: string[],
  dateList: string[],
  showDealPast: boolean = true
) => {
  const fromBlogs = await getMatchingBlogs(fromList, "depart");
  console.log("fromBlogs", fromBlogs);
  console.log("====================================");

  const toBlogs = await getMatchingBlogs(toList, "arrive");
  console.log("toBlogs", toBlogs);
  console.log("====================================");

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
  console.log("matchingBlogs", matchingBlogs);
  console.log("====================================");

  let datesBlogs = [];
  if (dateList.length > 0) {
    datesBlogs = await getMatchingBlogs(dateList, "dates");
  }

  if (datesBlogs.length > 0) {
    matchingBlogs = matchingBlogs.filter((blog) => {
      return datesBlogs.some((dateBlog) => dateBlog.id === blog.id);
    });
  }

  if (!showDealPast) {
    matchingBlogs = matchingBlogs.filter((blog) => {
      if (blog.dates) {
        return !checkIfAllDatesArePast(blog.dates);
      } else {
        return true;
      }
    });
  }

  return removeDuplicates(matchingBlogs);
};

export const getTests = async (from: string) => {
  const response = await fetch(
    getEntriesUrl("test") + `&fields.depart[match]=${from}`
  );

  const data = await response.json();

  if (data.items.length === 0) {
    return [];
  } else {
    return data.items.map((item: any) => item.fields);
  }
};
