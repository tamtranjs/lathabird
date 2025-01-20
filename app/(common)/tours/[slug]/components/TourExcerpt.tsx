export default function TourExcerpt({ excerpt }: { excerpt: string }) {
  return (
    <div className="mb-6">
      <div className="text-slate-400">
        <p>{excerpt}</p>
      </div>
    </div>
  );
}
