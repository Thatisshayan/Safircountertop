import { cn } from "@/lib/utils"

/** Chiseled Eyebrow — small-caps label + short gold vein-line rule, used above every section heading. */
function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-4 flex items-center gap-3", className)}>
      <span className="h-px w-10 bg-gradient-to-r from-primary to-primary/20" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
    </div>
  )
}

export { Eyebrow }
