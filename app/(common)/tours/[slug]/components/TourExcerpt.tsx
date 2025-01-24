export default function TourExcerpt({ excerpt }: { excerpt: string }) {
  return (
    <div className="mb-6 mt-6">
      <div className="text-black">
        <p>{excerpt}</p>
      </div>
    </div>
  );
}
