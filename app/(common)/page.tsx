import Tagline from "@/components/elements/Tagline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="home-background bg-gray-100 md:pt-48 md:pb-36 py-36">
        {/* <div className="hidden sm:block"><Tagline /></div> */}
        <div className="wrapper">
          <div className="text-center">
            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
          </div>
          
          <form action="" className="h-[400px] md:h-[100px] bg-gray-600">
            abc
          </form>
        </div>
      </div>
    </main>
  );
}
