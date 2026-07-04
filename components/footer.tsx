import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Roof Installation", href: "/services" },
  { name: "Roof Repair", href: "/services" },
  { name: "Metal Roofing", href: "/services" },
  { name: "Roof Refurbishing", href: "/services" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/#why-choose-us" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* CTA Banner */}
      <div className="bg-primary py-10">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-balance">
            Ready to Protect Your Mobile Home?
          </h2>
          <p className="text-primary-foreground/90 max-w-xl">
            Speak with Pacific Mobile Home Service about your roofing project today.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
            <a href="tel:6197509125">
              <Phone className="size-5" />
              CALL NOW: (619) 750-9125
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                viewBox="0 0 40 30"
                className="size-10 text-primary"
                fill="currentColor"
              >
                <path d="M20 0L0 15h5v15h30V15h5L20 0zm0 5l12 9v14H8V14l12-9z" />
              </svg>
              <div>
                <span className="text-xl font-bold tracking-tight">
                  Pacific
                </span>
                <span className="block text-xs text-primary font-medium tracking-wider">
                  Mobile Home Service
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              San Diego County&apos;s trusted mobile home roofing experts since 1976.
            </p>
            <Button asChild className="mt-2">
              <a href="tel:6197509125">
                <Phone className="size-4" />
                (619) 750-9125
              </a>
            </Button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Navigate</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="tel:6197509125" className="hover:text-white transition-colors">
                  (619) 750-9125
                </a>
              </li>
              <li>
                <a href="mailto:themobilehomepro@gmail.com" className="hover:text-white transition-colors">
                  themobilehomepro@gmail.com
                </a>
              </li>
              <li>San Diego County, CA</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-white/70 text-sm">Licensed & Insured</p>
              <p className="text-white/70 text-sm">48 Years of Experience</p>
              <p className="text-white/70 text-sm">Family-Owned Business</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Pacific Mobile Home Service. All rights reserved. Serving San Diego County.
          </p>
        </div>
      </div>
    </footer>
  )
}
