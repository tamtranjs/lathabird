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

  const formatDate = moment(date).format("Do MMMM YYYY");

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
  });

  return {
    id,
    title,
    slug,
    excerpt,
    date: formatDate,
    tag,
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
  };
};
