import RichText from "@/components/layouts/RichText";

export default function Highlight({ content }: any) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-[#ff0000]">
        ĐẶC ĐIỂM NỔI BẬT:
      </h2>

      <div className="text-slate-400 mt-4">
        <RichText content={content} />
      </div>
    </div>
  );
}
