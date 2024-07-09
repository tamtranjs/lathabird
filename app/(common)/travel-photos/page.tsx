import type { Metadata } from "next";
import HeadBackGround from "@/components/layouts/HeadBackGround";

export const metadata: Metadata = {
  title: "Travel Photos | Lathabird",
  description: "Travel Photos",
}

export default function TravelPhotos() {
  return (
    <>
      <HeadBackGround
        title="Travel Photos"
        name="Travel Photos"
      />
      <section className="relative md:py-24 py-16">
        
      </section>
    </>
  )
}
