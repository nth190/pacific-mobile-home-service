import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone } from "lucide-react"
import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
export const metadata: Metadata = {
  title: "Our Roofing Services | Pacific Mobile Home Service",
  description: "Professional mobile home roofing services in San Diego County, including roof installation, roof repair, metal roofing, and roof refurbishing.",
}

const services = [
  {
    title: "Roof Installation",
    description:
      "New roof installation for mobile and manufactured homes using durable materials built for long-term protection.",
    href: "/services/roof-installation",
    icon: (
      <svg viewBox="0 0 64 64" className="size-20 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h8v24h40V32h8L32 8z" />
        <path d="M20 32l12-10 12 10" />
        <rect x="26" y="42" width="12" height="14" />
      </svg>
    ),
  },
  {
    title: "Roof Repair",
    description:
      "Repair services for leaks, roof damage, worn areas, and problem spots before they become bigger issues.",
    href: "/services/roof-repair",
    icon: (
      <svg viewBox="0 0 64 64" className="size-20 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h8v24h40V32h8L32 8z" />
        <path d="M24 40l8-8 8 8" />
        <path d="M32 32v16" />
      </svg>
    ),
  },
  {
    title: "Metal Roofing",
    description:
      "Durable, energy-efficient metal roofing solutions designed for mobile homes and San Diego weather.",
    href: "/services/metal-roofing",
    icon: (
      <svg viewBox="0 0 64 64" className="size-20 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h56L32 8z" />
        <path d="M12 32v24h40V32" />
        <path d="M16 32l16-12 16 12" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    title: "Roof Refurbishing",
    description:
      "Extend the life of your existing roof with practical repair, restoration, and maintenance work.",
    href: "/services/roof-refurbishing",
    icon: (
      <svg viewBox="0 0 64 64" className="size-20 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8L4 32h8v24h40V32h8L32 8z" />
        <circle cx="32" cy="40" r="8" />
        <path d="M32 36v8M28 40h8" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
      
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mobile Home Roofing Services
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pacific Mobile Home Service provides professional roofing solutions for mobile and manufactured homes across San Diego County.
            </p>

            <Button size="lg" asChild>
              <a href="tel:6197509125">
                <Phone className="size-5" />
                CALL NOW: (619) 750-9125
              </a>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.title} href={service.href}>
                  <Card className="group hover:shadow-xl transition-all cursor-pointer border-2 hover:border-primary/30 h-full">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center group-hover:scale-105 transition-transform">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        {/* CTA */}
      
      </main>
      <Footer />
    </div>
  )
}
