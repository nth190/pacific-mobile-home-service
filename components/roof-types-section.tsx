const roofTypes = [
  {
    title: "Metal Roofs",
    subtitle: "Our Specialty",
    icon: (
      <svg viewBox="0 0 64 64" className="size-20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 28h56L32 8z" />
        <path d="M8 28l8 28h32l8-28" />
        <path d="M16 28l6 28M26 28l4 28M34 28l-2 28M42 28l-4 28M48 28l-6 28" />
      </svg>
    ),
  },
  {
    title: "Shingle Roofs",
    subtitle: "All Types of Shingles",
    icon: (
      <svg viewBox="0 0 64 64" className="size-20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h8v24h40V32h8L32 8z" />
        <path d="M12 32c4 0 8 2 12 2s8-2 12-2 8 2 12 2" />
        <path d="M12 40c4 0 8 2 12 2s8-2 12-2 8 2 12 2" />
        <path d="M12 48c4 0 8 2 12 2s8-2 12-2 8 2 12 2" />
      </svg>
    ),
  },
  {
    title: "Flat Roofs",
    subtitle: "All Types of Flat Roofing",
    icon: (
      <svg viewBox="0 0 64 64" className="size-20" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="20" width="48" height="4" />
        <rect x="8" y="24" width="48" height="32" />
        <path d="M20 24v32M32 24v32M44 24v32" />
        <ellipse cx="52" cy="36" rx="4" ry="6" />
      </svg>
    ),
  },
]

export function RoofTypesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mobile Home Roofing Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We service all types of mobile home roofs, including metal, shingle, and flat roofs.{" "}
            <a href="tel:6197509125" className="text-primary hover:underline">
              Call (619) 750-9125
            </a>{" "}
            for a free roofing quote.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roofTypes.map((type) => (
            <div
              key={type.title}
              className="bg-primary text-primary-foreground rounded-xl p-8 text-center hover:bg-primary/90 transition-colors"
            >
              <div className="mb-4 flex justify-center">{type.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
              <p className="text-primary-foreground/80">{type.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
