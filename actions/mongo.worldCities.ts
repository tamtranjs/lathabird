"use server";

import { getCities } from "@/lib/mongodb/worldCities";

export async function getCitiesBySearch(query: string): Promise<WorldCity[]> {
  if (query.length < 2) return [];

  const res = await getCities(query);
  if (res.ok) {
    return res.data;
  } else {
    return [];
  }
}
