import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "kitchen-island.jpg", alt: "White granite waterfall island in a modern kitchen" },
  { src: "marble-close.jpg", alt: "Close-up of Calacatta marble veining" },
  { src: "kitchen-2.jpg", alt: "Dark granite countertop in a contemporary kitchen" },
  { src: "bathroom-vanity.jpg", alt: "Marble bathroom vanity countertop" },
  { src: "kitchen-3.jpg", alt: "Quartz countertop kitchen with pendant lighting" },
  { src: "fabrication.jpg", alt: "Stone fabrication shop cutting a granite slab" },
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
