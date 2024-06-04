import { notFound } from "next/navigation";
interface Props {
  blogData: Promise< Blog | null>;
}

export default async function BlogIntro({ blogData }: Props) {

  const data = await blogData;

  if (!data) {
    return notFound()
  }

  return (
    <div>
      <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">{data?.title ? data.title : 'Traveller Visiting Ice Cave With Amazing Eye-catching Scenes'}</h3>
        <ul className="list-none mt-6">
          <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Author :</span> <span className="block">Travosy</span></li>
          <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">{data?.date ? data.date : '19th June 2024'}</span></li>
          <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
        </ul>
    </div>
  )
}
