type Blog = {
  id: number,
  image: string,
  date: string,
  title: string,
  desc: string,
  tag: string,
  segment: string,
  author: {
    name: string,
    role: string,
    avatar: string,
  }
}