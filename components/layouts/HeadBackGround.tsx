interface Props {
  title: string;
  name: string;
}

export default function HeadBackGround(props: Props) {
  return (
    <section className="relative mt-[74px] md:mt-0 table w-full items-center py-36 md:py-28 lg:py-32 bg-[url('/images/background12.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 backdrop-blur-[20px] bg-white/50 bg-gradient-to-b from-white/0 to-[var(--desty-white)] bg-blend-multiply z-0"></div>
      <div className="wrapper relative">
        <div className="grid grid-cols-1 text-center">
          <h3 className="text-4xl leading-normal tracking-wider font-semibold text-black">
            {props.title}
          </h3>
        </div>
      </div>
    </section>
  );
}
