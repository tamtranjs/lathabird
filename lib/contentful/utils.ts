import moment from "moment";

export const getBlogObject = (item: any, assets: any, entries: any) => {
  const id = item.sys.id;

  const {
    title,
    slug,
    excerpt,
    date,
    tag,
    content,
    author,
    blogType,
    timeToRead,
    depart,
    arrive,
    availableDates,
  } = item.fields;

  const expired = item.fields.expired || false;

  // const formatDate = moment(date).format("Do MMMM YYYY");
  const formattedDate: string = moment(date).format("DD/MM/YYYY");

  let name = "";
  let avatarId = "";

  entries.forEach((entry: any) => {
    if (entry.sys.id === author.sys.id) {
      name = entry.fields.name;
      avatarId = entry.fields.avatar.sys.id;
    }
  });

  let coverImage = {
    url: "",
    width: 0,
    height: 0,
    fileName: "",
  };
  let avatar = "";
  let backgroundImage = {
    url: "",
    width: 0,
    height: 0,
    fileName: 0,
  };
  assets.forEach((asset: any) => {
    if (asset.sys.id === item.fields.coverImage.sys.id) {
      coverImage.url = `https://${asset.fields.file.url.slice(2)}`;
      coverImage.width = asset.fields.file.details.image.width;
      coverImage.height = asset.fields.file.details.image.height;
      coverImage.fileName = asset.fields.file.fileName;
    }
    if (asset.sys.id === avatarId) {
      avatar = `https://${asset.fields.file.url.slice(2)}`;
    }
    if (
      item.fields.backgroundImage &&
      asset.sys.id === item.fields.backgroundImage.sys.id
    ) {
      backgroundImage.url = `https://${asset.fields.file.url.slice(2)}`;
      backgroundImage.width = asset.fields.file.details.image.width;
      backgroundImage.height = asset.fields.file.details.image.height;
      backgroundImage.fileName = asset.fields.file.fileName;
    }
  });

  return {
    id,
    title,
    slug,
    excerpt,
    date: formattedDate,
    tag,
    backgroundImage,
    coverImage,
    author: {
      name,
      avatar,
    },
    content,
    blogType,
    timeToRead,
    depart,
    arrive,
    availableDates,
    expired,
  };
};

export const getTourObject = (item: any, assets: any) => {
  const id = item.sys.id;

  const {
    title,
    slug,
    duration,
    activityType,
    groupSize,
    language,
    costPerDay,
    photoList,
    tourDescription,
    label,
    place,
    location,
  } = item.fields;

  let galleryImages: any[] = [];
  photoList.forEach((image: any) => {
    assets.forEach((asset: any) => {
      if (asset.sys.id === image.sys.id) {
        galleryImages.push({
          url: `https://${asset.fields.file.url.slice(2)}`,
          width: asset.fields.file.details.image.width,
          height: asset.fields.file.details.image.height,
          fileName: asset.fields.file.fileName,
        });
      }
    });
  });

  return {
    id,
    title,
    slug,
    place,
    location,
    duration,
    activityType,
    groupSize,
    language,
    costPerDay,
    tourDescription,
    photoList: galleryImages,
    label,
  };
};

export const getTourObjectAlpha = (item: any, assets: any) => {
  const id = item.sys.id;

  const {
    title,
    slug,
    excerpt,
    countriesRoute,
    citiesRoute,
    tourCode,
    duration,
    airline,
    highlight,
    detailedSchedule,
    information,
    priceList,
    lowestPrice,
    tourSchedule,

    photoList,
  } = item.fields;

  let galleryImages: any[] = [];
  photoList.forEach((image: any) => {
    assets.forEach((asset: any) => {
      if (asset.sys.id === image.sys.id) {
        galleryImages.push({
          url: `https://${asset.fields.file.url.slice(2)}`,
          width: asset.fields.file.details.image.width,
          height: asset.fields.file.details.image.height,
          fileName: asset.fields.file.fileName,
        });
      }
    });
  });

  let backgroundImage = {
    url: "",
    width: 0,
    height: 0,
    fileName: 0,
  };
  assets.forEach((asset: any) => {
    if (
      item.fields.backgroundImage &&
      asset.sys.id === item.fields.backgroundImage.sys.id
    ) {
      backgroundImage.url = `https://${asset.fields.file.url.slice(2)}`;
      backgroundImage.width = asset.fields.file.details.image.width;
      backgroundImage.height = asset.fields.file.details.image.height;
      backgroundImage.fileName = asset.fields.file.fileName;
    }
  });

  return {
    id,
    title,
    slug,
    excerpt,
    backgroundImage,
    countriesRoute,
    citiesRoute,
    tourCode,
    duration,
    airline,
    highlight,
    detailedSchedule,
    information,
    priceList,
    lowestPrice,
    tourSchedule,

    photoList: galleryImages,
  };
};

export const getPhotoObject = (item: any, assets: any) => {
  const id = item.sys.id;

  const { backgroundImages, carouselImages } = item.fields;

  let backgroundImgs: any[] = [];
  backgroundImages.forEach((image: any) => {
    assets.forEach((asset: any) => {
      if (asset.sys.id === image.sys.id) {
        backgroundImgs.push({
          url: `https://${asset.fields.file.url.slice(2)}`,
          width: asset.fields.file.details.image.width,
          height: asset.fields.file.details.image.height,
          fileName: asset.fields.file.fileName,
        });
      }
    });
  });

  let carouselImgs: any[] = [];
  carouselImages.forEach((image: any) => {
    assets.forEach((asset: any) => {
      if (asset.sys.id === image.sys.id) {
        carouselImgs.push({
          url: `https://${asset.fields.file.url.slice(2)}`,
          width: asset.fields.file.details.image.width,
          height: asset.fields.file.details.image.height,
          fileName: asset.fields.file.fileName,
        });
      }
    });
  });

  return {
    id,
    backgroundImages: backgroundImgs,
    carouselImages: carouselImgs,
  };
};

export const getSeasonalTravelObject = (item: any, assets: any) => {
  const id = item.sys.id;

  const { title, slug, description } = item.fields;

  let image = {
    url: "",
    width: 0,
    height: 0,
    fileName: 0,
  };
  assets.forEach((asset: any) => {
    if (item.fields.image && asset.sys.id === item.fields.image.sys.id) {
      image.url = `https://${asset.fields.file.url.slice(2)}`;
      image.width = asset.fields.file.details.image.width;
      image.height = asset.fields.file.details.image.height;
      image.fileName = asset.fields.file.fileName;
    }
  });

  return {
    id,
    title,
    slug,
    image,
    description,
  };
};
