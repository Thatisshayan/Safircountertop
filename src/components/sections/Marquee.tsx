const ITEMS = [
  "Granite Countertops",
  "Marble Countertops",
  "Quartz Countertops",
  "Kitchen Islands",
  "Bathroom Vanities",
  "Waterfall Edges",
  "Custom Templating",
  "Full-Service Installation",
]

export function Marquee() {
  const list = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-b border-border bg-card py-4">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {list.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground"
          >
            {item}
            <span className="text-primary" aria-hidden="true">
              &#9670;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
