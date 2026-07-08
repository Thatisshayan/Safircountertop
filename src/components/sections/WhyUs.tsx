import { Eyebrow } from "@/components/ui/eyebrow"
import { CounterStat } from "@/components/ui/counter-stat"
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { motion } from "framer-motion"

const STATS = [
  { value: 15, suffix: "+", label: "Years Fabricating Stone" },
  { value: 900, suffix: "+", label: "Countertops Installed", max: 1000 },
  { value: 48, suffix: "h", label: "Avg. Template-to-Install" },
  { value: 100, suffix: "%", label: "Satisfaction Guaranteed" },
]

export function WhyUs() {
  return (
    <section className="border-b border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Why Safir Countertop</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-semibold">
              Precision Fabrication, Honest Craftsmanship
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every slab is hand-selected at the yard, digitally templated to
              the millimeter, and cut in our own shop — so the veining lines
              up across seams and the edge work looks intentional, not
              improvised. No shortcuts, no surprises.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10">
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={revealItem}>
                <CounterStat {...stat} />
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
