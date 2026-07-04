"use client"

import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: "Roof Installation", href: "/services/roof-installation" },
  { name: "Roof Repair", href: "/services/roof-repair" },
  { name: "Metal Roofing", href: "/services/metal-roofing" },
  { name: "Roof Refurbishing", href: "/services/roof-refurbishing" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#why-choose-us" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <p className="hidden sm:block">
            Zero Down Financing Available | Family-Owned Since 1976
          </p>
          <p className="sm:hidden text-center w-full">48 Years of Experience</p>
          <a
            href="tel:6197509125"
            className="hidden sm:inline-flex items-center gap-2 bg-white text-primary px-4 py-1.5 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            <Phone className="size-4" />
            CALL NOW: (619) 750-9125
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 40 30"
                    className="size-10 text-primary"
                    fill="currentColor"
                  >
                    <path d="M20 0L0 15h5v15h30V15h5L20 0zm0 5l12 9v14H8V14l12-9z" />
                  </svg>
                  <div>
                    <span className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                      Pacific
                    </span>
                    <span className="block text-sm lg:text-base text-primary font-medium tracking-wider">
                      Mobile Home Service
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors">
                  Services
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link href={service.href}>{service.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

               {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild>
                <a href="tel:6197509125">
                  <Phone className="size-4" />
                  Request An Estimate
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button size="sm" asChild>
                <a href="tel:6197509125">
                  <Phone className="size-4" />
                  Call
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="py-2">
                  <p className="font-medium text-primary mb-2">Services</p>
                  <div className="pl-4 flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {navigation.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
