interface Props {
  title: string;
  backgroundPhoto: string;
}

export default async function HeadBackground({
  title,
  backgroundPhoto,
}: Props) {
  return (
    <section
      className="relative table w-full items-center py-36 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundPhoto})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="wrapper relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
