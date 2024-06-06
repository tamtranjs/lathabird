
import Image from "next/image";
import BlogSideBar from "./BlogSideBar";
import TravelBlogs from "./TravelBlogs";

interface Props {
  blogPost: Promise<any | null>;
}

export default async function BlogContent(props: Props) {

  const blogPost = await props.blogPost;

  return (
    <div className="wrapper">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div className="lg:col-span-8 md:col-span-6">
          <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
            <Image
              src={blogPost.coverImage}
              alt=""
              width={1200}
              height={800}
            />
            <div className="p-6">
              <p className="text-slate-400">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
              <p className="text-slate-400 italic border-x-4 border-red-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable</p>
              <p className="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
            </div>
          </div>
        </div>
        <BlogSideBar authorData={blogPost?.author}/>
      </div>
      <TravelBlogs />
    </div>
  )
}
