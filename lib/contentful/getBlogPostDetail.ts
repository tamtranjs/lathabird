import { cache } from "react";
import moment from "moment";

export const getBlogPostDetail = cache(async (slug: string) => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blog&fields.slug=${slug}`
  );
  const data = await response.json();
  if (data.items.length === 0) {
    return null;
  } else {
    const item = data.items[0];
    const assets = data.includes.Asset;
    const entries = data.includes.Entry;

    return getBlogObject(item, assets, entries);
  }
});

export const getBlogObject = (item: any, assets: any, entries: any) => {

  const { title, slug, excerpt, date, tag } = item.fields;

  const formatDate = moment(date).format("Do MMMM YYYY");

  const name = entries[0].fields.name;
  const avatarId = entries[0].fields.avatar.sys.id;

  let coverImage = "";
  let avatar = "";
  assets.forEach((asset: any) => {
    if (asset.sys.id === item.fields.coverImage.sys.id) {
      coverImage = `https://${asset.fields.file.url.slice(2)}`;
    }
    if (asset.sys.id === avatarId) {
      avatar = `https://${asset.fields.file.url.slice(2)}`;
    }
  });

  return {
    title,
    slug,
    excerpt,
    date: formatDate,
    tag,
    coverImage,
    author: {
      name,
      avatar,
    }
  }
}