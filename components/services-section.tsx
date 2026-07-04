import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Roof Installation",
    description: "Complete new roof installations with quality materials built to last.",
    href: "/services/roof-installation",
    icon: (
      <svg viewBox="0 0 64 64" className="size-16 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h8v24h40V32h8L32 8z" />
        <path d="M20 32l12-10 12 10" />
        <rect x="26" y="42" width="12" height="14" />
      </svg>
    ),
  },
  {
    title: "Roof Repair",
    description: "Fast, reliable repairs for leaks, damage, and wear.",
    href: "/services/roof-repair",
    icon: (
      <svg viewBox="0 0 64 64" className="size-16 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h8v24h40V32h8L32 8z" />
        <path d="M24 40l8-8 8 8" />
        <path d="M32 32v16" />
      </svg>
    ),
  },
  {
    title: "Metal Roofing",
    description: "Durable, energy-efficient metal roofing for the San Diego climate.",
    href: "/services/metal-roofing",
    icon: (
      <svg viewBox="0 0 64 64" className="size-16 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h56L32 8z" />
        <path d="M12 32v24h40V32" />
        <path d="M16 32l16-12 16 12" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    title: "Roof Refurbishing",
    description: "Extend the life of your roof without a full replacement.",
    href: "/services/roof-refurbishing",
    icon: (
      <svg viewBox="0 0 64 64" className="size-16 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h8v24h40V32h8L32 8z" />
        <circle cx="32" cy="40" r="8" />
        <path d="M32 36v8M28 40h8" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Roofing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Specialized roofing for mobile and manufactured homes across San Diego County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/30 h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-105 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">VIEW ALL SERVICES</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
