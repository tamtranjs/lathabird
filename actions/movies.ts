"use server";

import { getMovies } from "@/lib/mongodb/movies";

export async function getMoviesBySearch(text: string) {
  if (text.length < 2) return [];
  await getMovies(text);
}
