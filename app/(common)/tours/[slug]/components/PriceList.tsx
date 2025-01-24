import RichTextAlpha from "@/components/layouts/RichTextAlpha";

export default function PriceList({ content }: any) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-primary">BẢNG GIÁ:</h2>

      <div className="text-slate-400 mt-4">
        <RichTextAlpha content={content} />
      </div>
    </div>
  );
}
