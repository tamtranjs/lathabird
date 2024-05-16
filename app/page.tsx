import Tagline from "@/components/elements/Tagline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="home-background bg-gray-100">
        <div className="hidden sm:block"><Tagline /></div>
        <div>
          <div>nav menu</div>
          <div>Background</div>
        </div>
      </div>
    </main>
  );
}
