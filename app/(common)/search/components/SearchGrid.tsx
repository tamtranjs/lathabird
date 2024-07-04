"use client";

import BlogItem from "@/components/elements/BlogItem";
import { getBlogPostList } from "@/lib/contentful/getBlogPostList";
import { useSearchParams } from "next/navigation";
import { findMatchingBlogs } from "@/lib/contentful/getBlogBySearch";
import { useEffect, useMemo, useState } from "react";

export default function SearchGrid() {

  const searchParams = useSearchParams();

  const fromPlace = searchParams.get("fromPlace");
  const toPlace = searchParams.get("toPlace");
  const monthYear = searchParams.get("monthYear") || "";
  const showPastDeal = searchParams.get("showPastDeal") === "true";

  const fromPlaceList = useMemo(() => (fromPlace ? fromPlace.split(",") : []),[fromPlace]);
  const toPlaceList = useMemo(() => (toPlace ? toPlace.split(",") : []), [toPlace]);
  const monthYearList = useMemo(() => (monthYear ? monthYear.split(",") : []), [monthYear]);

  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    const findBlogs = async () => {
      try {
        const blogs = await findMatchingBlogs(
          fromPlaceList,
          toPlaceList,
          monthYearList,
          showPastDeal
        );
        setBlogPosts(blogs);
        console.log("blogs", blogs);  
      } catch (error) {
        console.log("Failed to fetch blogs: ", error);
      }
    };
    findBlogs();
  }, [fromPlaceList, toPlaceList, monthYearList, showPastDeal]);

  return (
    <div className="wrapper relative">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {(blogPosts.length > 0) && blogPosts.map((item: any, index: number) => {
          return (
            <BlogItem key={index} blogPost={item}/>
          )
        })}
      </div>
    </div>
  )
}