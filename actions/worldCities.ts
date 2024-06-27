"use server";

import { getCity, getCities } from "@/lib/prisma/worldCities";

export async function getCityById(id: string) {
  return await getCity(id);
}

export async function getCitiesBySearch(text: string): Promise<WorldCity[]> {
  if (text.length < 2) return [];
  const res = await getCities(text);
  if (res.ok) {
    return res.data;
  } else {
    return [];
  }
}
