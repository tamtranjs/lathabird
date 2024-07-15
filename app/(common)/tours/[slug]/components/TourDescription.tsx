import RichText from "@/components/layouts/RichText";

export default function TourDescription({ description }: any) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Tour Descriptions:</h2>

      <div className="text-slate-400 mt-6">
        <RichText content={description} />
      </div>
    </div>
  );
}
