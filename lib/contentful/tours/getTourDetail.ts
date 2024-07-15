export const getTourDetail = async (slug: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    ok: true,
    data: {
      bgUrl: "/images/background8.jpg",
      title: "New Zealand's South Island brims with majestic",
      place: "New Zealand",
      duration: "2 day",
      type: "Adventure",
      groupSize: "Up to 15",
      language: "English",
      feePerDayOnePerson: "$20",
    },
  };
};

export const getTourDetail2 = async (slug: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return {
    ok: false,
    data: {
      title: "Tour in Vietnam",
      bgUrl: "/images/background8.jpg",
    },
  };
};
