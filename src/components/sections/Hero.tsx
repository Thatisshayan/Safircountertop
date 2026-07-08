import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-primary to-primary/20" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Granite &middot; Marble &middot; Quartz
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-semibold leading-[1.05] text-foreground">
            Transform Your Kitchen With Natural Stone
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Safir Countertop templates, fabricates, and installs custom granite,
            marble &amp; quartz countertops — precision-cut, expertly finished,
            installed clean the first time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Get My Free Estimate
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#gallery">See Our Slab Gallery</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by homeowners &amp; contractors for precision stonework
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <motion.img
              style={{ y }}
              src={`${import.meta.env.BASE_URL}images/kitchen-white-1.jpg`}
              alt="Custom Safir Countertop kitchen island with waterfall-edge natural stone counter"
              className="h-[120%] w-full object-cover"
              width={1600}
              height={1067}
              fetchPriority="high"
            />
          </div>
          <svg
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 h-16 w-16 text-primary opacity-70"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path d="M4 60 L24 24 L34 40 L44 12 L60 34" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="absolute -right-4 -top-4 hidden border border-primary/40 bg-background/95 px-5 py-4 backdrop-blur sm:block">
            <p className="font-display text-2xl font-semibold text-primary">15+</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Years Fabricating</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
