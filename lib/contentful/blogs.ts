"use server";

import { getEntriesUrl } from "@/lib/const";
import { removeDuplicates, checkIfAllDatesArePast } from "@/lib/utils";

const getMatchingBlogs = async (cityList: string[], field: string) => {
  const response = await Promise.all(
    cityList.map((city) =>
      fetch(getEntriesUrl("blog") + `&fields.${field}[match]=${city}`)
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

  let datesBlogs = [];
  if (dateList.length > 0) {
    datesBlogs = await getMatchingBlogs(dateList, "availableDates");
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
        return false;
      }
    });
  }

  return removeDuplicates(matchingBlogs);
};
