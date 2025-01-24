import RichTextAlpha from "@/components/layouts/RichTextAlpha";

export default function Highlight({ content }: any) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-primary">ĐẶC ĐIỂM NỔI BẬT:</h2>

      <div className="text-slate-400 mt-4">
        <RichTextAlpha content={content} />
      </div>
    </div>
  );
}
