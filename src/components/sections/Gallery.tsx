import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "kitchen-white-2.jpg", alt: "White granite waterfall island in a modern kitchen by Safir Countertop" },
  { src: "marble-wall-1.jpg", alt: "Calacatta marble feature wall and fireplace surround" },
  { src: "kitchen-dark-1.jpg", alt: "Dark stone countertop in a contemporary kitchen" },
  { src: "fireplace-1.jpg", alt: "Marble fireplace surround with natural veining" },
  { src: "kitchen-luxury-1.jpg", alt: "Dark granite waterfall island in a modern luxury kitchen" },
  { src: "kitchen-dark-close.jpg", alt: "Close-up of dark stone countertop with circular shelving detail" },
]

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-semibold">
            A Gallery of Finished Slabs
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {IMAGES.map((img) => (
            <motion.div
              key={img.src}
              variants={revealItem}
              className="group relative aspect-square overflow-hidden border border-border"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${img.src}`}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-primary/70" />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
