import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

/** Polished Counter Stat Bar — animated number + brass progress-fill bar beneath. */
export function CounterStat({
  value,
  suffix = "",
  label,
  max,
}: {
  value: number
  suffix?: string
  label: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = useState(0)
  const barMax = max ?? value

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <div ref={ref} className="text-left">
      <p className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      <div className="mt-3 h-px w-full bg-border">
        <motion.div
          className="h-px bg-primary"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${(value / barMax) * 100}%` } : { width: "0%" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}
