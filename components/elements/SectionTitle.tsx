export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-1 pb-8">
      <h2 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
        {title}
      </h2>
    </div>
  );
}
