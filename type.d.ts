type Blog = {
  id: number,
  image: string,
  date: string,
  title: string,
  desc: string,
  tag: string,
  slug: string,
  author: {
    name: string,
    role: string,
    avatar: string,
  }
}