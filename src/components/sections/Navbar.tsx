import { useEffect, useState } from "react"
import { Link } from "wouter"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/content"

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M10 44 L26 20 L34 32 L44 14 L56 30" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="font-display text-2xl font-semibold tracking-wide">
            Safir <span className="text-primary">Countertop</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <a href="#contact">Get My Free Estimate</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 text-base font-medium text-primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <Button asChild className="mt-2 w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Get My Free Estimate
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
