import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center border-b border-border px-6 text-center">
      <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        404
      </span>
      <h1 className="mt-4 font-display text-[clamp(2rem,4vw+1rem,3.5rem)] font-semibold">
        This Slab Hasn&rsquo;t Been Cut Yet
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        The page you're looking for doesn't exist. Let's get you back to
        solid ground.
      </p>
      <Button asChild size="lg" className="mt-10">
        <Link href="/">Back to Home</Link>
      </Button>
    </section>
  )
}
