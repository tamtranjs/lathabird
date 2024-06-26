import prisma from ".";

export async function getCities(text: string) {
  try {
    const cities = await prisma.world_cities.findMany({
      take: 10,
      select: {
        city: true,
        country: true,
      },
      where: {
        city: {
          contains: text,
        },
      },
    });

    prisma.$disconnect();
    return cities;
  } catch (error) {
    prisma.$disconnect();
    return error;
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
