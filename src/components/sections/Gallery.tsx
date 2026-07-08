import { useEffect, useState } from "react"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const IMAGES = [
  { src: "kitchen-white-2.jpg", alt: "White granite waterfall island in a modern kitchen by Safir Countertop" },
  { src: "marble-wall-1.jpg", alt: "Calacatta marble feature wall and fireplace surround" },
  { src: "kitchen-dark-1.jpg", alt: "Dark stone countertop in a contemporary kitchen" },
  { src: "fireplace-1.jpg", alt: "Marble fireplace surround with natural veining" },
  { src: "kitchen-luxury-1.jpg", alt: "Dark granite waterfall island in a modern luxury kitchen" },
  { src: "kitchen-dark-close.jpg", alt: "Close-up of dark stone countertop with circular shelving detail" },
]

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = () => setActiveIndex(null)
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length))
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % IMAGES.length))

  useEffect(() => {
    if (activeIndex === null) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [activeIndex])

  return (
    <section id="gallery" className="border-b border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-semibold">
            A Gallery of Finished Slabs
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Real installs from real homes — click any photo for a closer look at the veining and edge work.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              variants={revealItem}
              onClick={() => setActiveIndex(i)}
              aria-label={`View larger image: ${img.alt}`}
              className="group relative aspect-square cursor-zoom-in overflow-hidden border border-border text-left"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${img.src}`}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-primary/70" />
            </motion.button>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur sm:p-10"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.img
              key={IMAGES[activeIndex].src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={`${import.meta.env.BASE_URL}images/${IMAGES[activeIndex].src}`}
              alt={IMAGES[activeIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full border border-border object-contain"
            />

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-xs text-muted-foreground sm:text-sm">
              {IMAGES[activeIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
