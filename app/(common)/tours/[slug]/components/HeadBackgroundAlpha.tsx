interface Props {
  title: string;
  backgroundImage: string;
}

export default async function HeadBackgroundAlpha({ tour }: any) {
  console.log("tour", tour);
  const { backgroundImage } = await tour.data;
  return (
    <div>
      <section
        className=" table w-full items-center bg-center bg-no-repeat bg-cover h-[800px] max-h-[75vh]"
        style={{
          backgroundImage: `url(${backgroundImage.url})`,
        }}
      ></section>
    </div>
  );
}
