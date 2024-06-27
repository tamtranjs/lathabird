import prisma from ".";

export async function getCities(
  text: string
): Promise<{ ok: boolean; data: WorldCity[]; error?: any }> {
  try {
    const cities: WorldCity[] = await prisma.world_cities.findMany({
      take: 10,
      select: {
        city: true,
        country: true,
      },
      where: {
        OR: [
          {
            city: {
              contains: text,
              mode: "insensitive",
            },
          },
          {
            city_ascii: {
              contains: text,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    prisma.$disconnect();

    return {
      ok: true,
      data: cities,
    };
  } catch (error) {
    prisma.$disconnect();

    return {
      ok: false,
      data: [],
      error: error,
    };
  }
}

export async function getCity(id: string) {
  try {
    const city = await prisma.world_cities.findUnique({
      where: {
        id,
      },
    });

    prisma.$disconnect();
    return city;
  } catch (error) {
    prisma.$disconnect();
    return error;
  }
}
