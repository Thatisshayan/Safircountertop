import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * SlabCard — the site's signature card language ("Slab Frame Card" from ideas.md).
 * Brass hairline border that brightens on hover, plus a corner vein-flick accent.
 * Every card-like surface in this build should use this component, not a bare div.
 */
function SlabCard({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="slab-card"
      className={cn(
        "group relative border border-border bg-card p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-primary/70",
        className
      )}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="absolute right-0 top-0 h-6 w-6 -translate-y-px translate-x-px text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M24 0L0 24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 0V10L14 0H24Z" fill="currentColor" fillOpacity="0.15" />
      </svg>
      {children}
    </div>
  )
}

export { SlabCard }
