"use server";

import { getCity, getCities } from "@/lib/prisma/worldCities";

export async function getCityById(id: string) {
  return await getCity(id);
}

export async function getCitiesBySearch(text: string) {
  if (text.length < 3) return [];
  return await getCities(text);
}
