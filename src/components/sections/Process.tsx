import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { motion } from "framer-motion"

const STEPS = [
  {
    n: "01",
    title: "Free In-Home Estimate",
    desc: "We measure your space, discuss materials, and provide a clear, no-obligation quote.",
  },
  {
    n: "02",
    title: "Select Your Slab",
    desc: "Visit our slab yard or browse our catalog to hand-pick the exact stone and edge profile.",
  },
  {
    n: "03",
    title: "Precision Templating",
    desc: "Our team digitally templates your space for a millimeter-accurate cut.",
  },
  {
    n: "04",
    title: "Fabrication & Install",
    desc: "Your countertop is cut, finished, and installed cleanly — usually within a week.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-semibold">
            From Measurement to Installed Slab
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <motion.div key={step.n} variants={revealItem} className="relative border-t border-primary/40 pt-6">
              <span className="font-display text-3xl font-semibold text-primary">
                {step.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
