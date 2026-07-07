import { Star } from "lucide-react"
import { Eyebrow } from "@/components/ui/eyebrow"
import { SlabCard } from "@/components/ui/slab-card"
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { motion } from "framer-motion"

const REVIEWS = [
  {
    name: "Michael R.",
    text: "The team templated our kitchen island on a Tuesday and had the granite installed by Friday. Seams are nearly invisible and the edge work is flawless.",
  },
  {
    name: "Alina T.",
    text: "We visited the slab yard and picked out our own marble piece — the fabricators matched the veining across our island perfectly. Couldn't be happier.",
  },
  {
    name: "David K.",
    text: "Professional from the free estimate through installation. They protected our floors, cleaned up completely, and the quartz counters look incredible.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Customer Reviews</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-semibold">
            What Homeowners Are Saying
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <motion.div key={review.name} variants={revealItem}>
              <SlabCard className="h-full">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{review.text}”
                </p>
                <p className="mt-6 text-sm font-semibold">{review.name}</p>
              </SlabCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
