import { Suspense } from "react";

interface Props {
  blogPost: any;
}

export default async function HeadBackground({ blogPost }: Props) {
  const blogPostData = await blogPost;

  const { title, coverImage, backgroundImage, expired } = blogPostData;
  const coverImgUrl = coverImage.url || "/images/background1.jpg";

  const bgrUrl = backgroundImage.url || coverImgUrl;

  return (
    <section
      className="relative mt-[74px] lg:mt-0 table w-full items-center py-36 md:py-44 lg:py-56 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgrUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="wrapper relative">
        <div className="grid grid-cols-1 text-center">
          <Suspense fallback={<h1>...Loading</h1>}>
            <h1 className="text-lg md:text-xl lg:text-4xl leading-normal tracking-wider font-semibold text-white">
              {expired && (
                <span className="bg-[#ad0303] text-white text-base lg:text-3xl mr-1 py-1">
                  &nbsp;EXPIRED&nbsp;
                </span>
              )}
              {title}
            </h1>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
