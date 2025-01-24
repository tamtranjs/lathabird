export default function TourSummary({
  title,
  countriesRoute,
  citiesRoute,
  tourCode,
  duration,
  airline,
}: {
  title: string;
  countriesRoute: string;
  citiesRoute: string;
  tourCode: string;
  duration: string;
  airline: string;
}) {
  return (
    <div className="mt-6 text-center font-bold text-secondary">
      <h2>{title}</h2>
      <h3>{countriesRoute}</h3>
      <h4 className="text-transparent bg-clip-text bg-blue-500">
        {citiesRoute}
      </h4>
      <h5 className="text-secondary">
        MÃ TOUR {tourCode} - THỜI GIAN: {duration}
      </h5>
      <h6 className="text-secondary">HÀNG KHÔNG: {airline}</h6>
    </div>
  );
}
