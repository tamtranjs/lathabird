type Blog = {
  id: number;
  image: string;
  date: string;
  title: string;
  desc: string;
  tag: string;
  slug: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tag: string;
  coverImage: string;
};

type WorldCity = {
  id?: string;
  city: string;
  country: string;
};
