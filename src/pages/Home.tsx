import { Hero } from "@/components/sections/Hero"
import { Marquee } from "@/components/sections/Marquee"
import { Services } from "@/components/sections/Services"
import { WhyUs } from "@/components/sections/WhyUs"
import { Process } from "@/components/sections/Process"
import { Gallery } from "@/components/sections/Gallery"
import { Reviews } from "@/components/sections/Reviews"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Process />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  )
}
