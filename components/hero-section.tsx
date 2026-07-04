"use client"

import { Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-roof.jpg"
          alt="Professional roofing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Pacific Mobile Home Service
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-pretty">
              San Diego County&apos;s trusted mobile home roofing experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="tel:6197509125">
                  <Phone className="size-5" />
                  CALL NOW: (619) 750-9125
                </a>
              </Button>
               <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                <a href="#contact">Request An Estimate</a>
              </Button>  
            </div>

            <p className="flex items-center gap-2 justify-center lg:justify-start text-sm text-slate-600 mb-8">
              <ShieldCheck className="size-4 text-slate-500 shrink-0" />
              State License #: C47 585450 B
            </p>

            {/* Trust Badges - Larger and more prominent */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-border">
                <div className="size-12 bg-primary rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="size-7 text-white" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Licensed</p>
                  <p className="text-sm text-muted-foreground">& Insured</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-border">
                <div className="size-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">48</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-border">
                <div className="size-12 bg-primary rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="size-7 text-white" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Family</p>
                  <p className="text-sm text-muted-foreground">Owned</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-xl border-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-primary">
                  Contact Us
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Get a response within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formsubmit.co/themobilehomepro@gmail.com"
                  method="POST"
                  className="space-y-3"
                >
                  <input type="hidden" name="_subject" value="New website contact request" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://www.pacificmobilehomeservice.com/#contact" />

                  <Input name="Name" placeholder="Name *" required />
                  <Input name="Phone" type="tel" placeholder="Phone Number *" required />
                  <Input name="Email" type="email" placeholder="Email" />
                  <Input name="City" placeholder="City / Location" />
                  <select
                    name="Service"
                    defaultValue=""
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select Service Needed
                    </option>
                    <option value="Roof Installation">Roof Installation</option>
                    <option value="Roof Repair">Roof Repair</option>
                    <option value="Metal Roofing">Metal Roofing</option>
                    <option value="Roof Refurbishing">Roof Refurbishing</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea
                    name="Message"
                    className="flex min-h-[70px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Message (optional)"
                  />
                  <Button type="submit" className="w-full text-lg" size="lg">
                    SUBMIT REQUEST
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
