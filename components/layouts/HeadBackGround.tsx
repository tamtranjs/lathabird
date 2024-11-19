interface Props {
  title: string;
  name: string;
}

export default function HeadBackGround(props: Props) {
  return (
    <section className="relative mt-[74px] lg:mt-0 table w-full items-center py-36 md:py-44 lg:py-56 bg-[url('/images/background12.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="wrapper relative">
        <div className="grid grid-cols-1 text-center">
          <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
            {props.title}
          </h3>
        </div>
      </div>
    </section>
  );
}
