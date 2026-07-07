import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/content"
import { Reveal } from "@/components/ui/reveal"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-semibold">
            Get Your Free Estimate
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Call Us</p>
                  <a href={`tel:${SITE.phoneHref}`} className="text-sm text-muted-foreground hover:text-primary">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Email Us</p>
                  <a href={`mailto:${SITE.email}`} className="text-sm text-muted-foreground hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Visit Our Shop</p>
                  <p className="text-sm text-muted-foreground">{SITE.address}</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-semibold">Hours</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {SITE.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="aspect-video w-full overflow-hidden border border-border">
                <iframe
                  title="Safir Countertop location map"
                  src={SITE.mapEmbedSrc}
                  className="h-full w-full grayscale invert-[0.9] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center border border-primary/50 bg-card p-12 text-center">
                <p className="font-display text-2xl font-semibold text-primary">Thank You</p>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  We received your request and will reach out within one business
                  day to schedule your free in-home estimate.
                </p>
              </div>
            ) : (
              <form
                className="grid gap-6 border border-border bg-card p-8 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="material" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Material Interested In
                  </label>
                  <select
                    id="material"
                    name="material"
                    defaultValue=""
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary"
                  >
                    <option value="" disabled>Select a material</option>
                    <option value="granite">Granite</option>
                    <option value="marble">Marble</option>
                    <option value="quartz">Quartz</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary"
                    placeholder="Tell us about your kitchen or bathroom project..."
                  />
                </div>
                <Button type="submit" size="lg" className="sm:col-span-2">
                  Request My Free Estimate
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
