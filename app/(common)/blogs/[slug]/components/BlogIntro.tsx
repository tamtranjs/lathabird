interface Props {
  blogPost: Promise<any | null>;
}

export default async function BlogIntro({ blogPost }: Props) {
  const data = await blogPost;
  const { title } = data;

  return (
    <div>
      <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">
        {title}
      </h1>
    </div>
  );
}
