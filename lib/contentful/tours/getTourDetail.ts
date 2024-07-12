export const getTourDetail = async (slug: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    ok: true,
    data: {
      title: "Tour in Vietnam",
      bgUrl: "/images/background8.jpg",
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
