"use server";

import { getEntriesUrl } from "@/lib/const";

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

const removeDuplicates = (blogs: any) => {
  const uniqueBlogs: any = [];
  const ids = new Set();

  blogs.forEach((blog: any) => {
    if (!ids.has(blog.id)) {
      ids.add(blog.id);
      uniqueBlogs.push(blog);
    }
  });

  return uniqueBlogs;
};

export const getBlogs = async (fromList: string[], toList: string[]) => {
  const fromBlogs = await getMatchingBlogs(fromList, "depart");

  console.log("fromBlogs", fromBlogs);
  console.log("====================================");
  const toBlogs = await getMatchingBlogs(toList, "arrive");
  console.log("====================================");
  console.log("toBlogs", toBlogs);

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

  console.log("matchingBlogs", removeDuplicates(matchingBlogs));
  console.log("====================================");
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
