"use client";

import HeadBackGround from "@/components/layouts/HeadBackGround";
import { useSearchParams } from "next/navigation";
import { findMatchingBlogs } from "@/lib/contentful/blogs";
import { useEffect, useMemo } from "react";

export default function Search() {
  const searchParams = useSearchParams();

  const fromPlace = searchParams.get("fromPlace");
  const toPlace = searchParams.get("toPlace");
  const monthYear = searchParams.get("monthYear") || "";
  const showPastDeal = searchParams.get("showPastDeal") === "true";

  const fromPlaceList = useMemo(() => (fromPlace ? fromPlace.split(",") : []),[fromPlace]);
  const toPlaceList = useMemo(() => (toPlace ? toPlace.split(",") : []), [toPlace]);
  const monthYearList = useMemo(() => (monthYear ? monthYear.split(",") : []), [monthYear]);

  useEffect(() => {
    const findBlogs = async () => {
      try {
        const blogs = await findMatchingBlogs(
          fromPlaceList,
          toPlaceList,
          monthYearList,
          showPastDeal
        );
        console.log("blogs", blogs);  
      } catch (error) {
        console.log("Failed to fetch blogs: ", error);
      }
    };
    findBlogs();
  }, [fromPlaceList, toPlaceList, monthYearList, showPastDeal]);

  return (
    <>
      <HeadBackGround title="Search Results" name="Search" />
    </>
  );
}
