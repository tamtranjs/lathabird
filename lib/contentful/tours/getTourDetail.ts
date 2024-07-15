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
      imageList: [
        {
          index: 0,
          url: "/images/background1.jpg",
          fileName: "background1.jpg",
          width: 1920,
          height: 1080,
        },
        {
          index: 1,
          url: "/images/background2.jpg",
          fileName: "background2.jpg",
          width: 1920,
          height: 1080,
        },
        {
          index: 2,
          url: "/images/background3.jpg",
          fileName: "background3.jpg",
          width: 1920,
          height: 1080,
        },
        {
          index: 3,
          url: "/images/background4.jpg",
          fileName: "background4.jpg",
          width: 1920,
          height: 1080,
        },
      ],
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
