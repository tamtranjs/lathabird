interface Props {
  title: string;
  name: string;
}

export default function HeadBackGround(props: Props) {
  return (
    <section className="relative table w-full items-center py-36 bg-[url('/images/background12.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="wrapper relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
            {props.title}
          </h3>
        </div>
      </div>
    </section>
  );
}
