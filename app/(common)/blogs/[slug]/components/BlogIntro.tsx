interface Props {
  blogPost: Promise< any | null>;
}

export default async function BlogIntro({ blogPost }: Props) {

  const data = await blogPost;
  const { title, author, date } = data;

  return (
    <div>
      <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">{title}</h3>
        <ul className="list-none mt-6">
          <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Author :</span> <span className="block">{author.name}</span></li>
          <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">{date}</span></li>
          <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
        </ul>
    </div>
  )
}
