import { MapPin, Phone, Mail } from "lucide-react"
import { FacebookIcon, InstagramIcon } from "@/components/ui/brand-icons"
import { SITE } from "@/lib/content"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M10 44 L26 20 L34 32 L44 14 L56 30" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="font-display text-xl font-semibold">
              Safir <span className="text-primary">Countertop</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Custom granite, marble &amp; quartz countertops — precision fabrication and
            clean installs for kitchens and bathrooms.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Safir Countertop on Facebook"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Safir Countertop on Instagram"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
            <li><a href="#process" className="hover:text-primary">Process</a></li>
            <li><a href="#reviews" className="hover:text-primary">Reviews</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Materials
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Granite Countertops</li>
            <li>Marble Countertops</li>
            <li>Quartz Countertops</li>
            <li>Kitchen Islands</li>
            <li>Bathroom Vanities</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-primary">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Safir Countertop. All rights reserved.</p>
          <p>Built with precision, like our slabs.</p>
        </div>
      </div>
    </footer>
  )
}
