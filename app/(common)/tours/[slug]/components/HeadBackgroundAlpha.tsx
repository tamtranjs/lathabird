export default function HeadBackgroundAlpha({
  backgroundImageUrl,
}: {
  backgroundImageUrl: string;
}) {
  return (
    <div>
      <section
        className=" table w-full items-center bg-center bg-no-repeat bg-cover h-[800px] max-h-[75vh]"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></section>
    </div>
  );
}
