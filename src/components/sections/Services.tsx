import { Gem, Layers, Sparkles, Wrench } from "lucide-react"
import { Eyebrow } from "@/components/ui/eyebrow"
import { SlabCard } from "@/components/ui/slab-card"
import { Reveal } from "@/components/ui/reveal"

const SERVICES = [
  {
    icon: Gem,
    title: "Granite Countertops",
    desc: "Durable, heat-resistant natural stone in a wide range of colors and veining patterns — ideal for busy kitchens.",
    img: "slab-1.jpg",
    featured: true,
  },
  {
    icon: Layers,
    title: "Marble Countertops",
    desc: "Timeless elegance for kitchens, islands, and bathroom vanities with signature natural veining.",
  },
  {
    icon: Sparkles,
    title: "Quartz Countertops",
    desc: "Low-maintenance engineered stone with consistent pattern and superior stain resistance.",
  },
  {
    icon: Wrench,
    title: "Templating & Installation",
    desc: "Precision digital templating and clean, on-time installation by our experienced fabrication team.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-semibold">
            Stone Services, Fabricated With Precision
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <SlabCard className="flex h-full flex-col overflow-hidden p-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/${SERVICES[0].img}`}
                  alt="Close-up of polished granite slab with natural veining"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <Gem className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-2xl font-semibold">
                  {SERVICES[0].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {SERVICES[0].desc}
                </p>
              </div>
            </SlabCard>
          </Reveal>

          {SERVICES.slice(1).map((service, i) => (
            <Reveal key={service.title} delay={0.08 * (i + 1)}>
              <SlabCard className="h-full">
                <service.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </SlabCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
