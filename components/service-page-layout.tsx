"use client"

import { Phone, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  heroImage: string
  overview: string
  features: string[]
  whyChooseUs: string[]
  ctaText?: string
  defaultService?: string
}

export function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  overview,
  features,
  whyChooseUs,
  ctaText = "Request a Roofing Estimate",
  defaultService = "",
}: ServicePageLayoutProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {subtitle}
              </p>
              <p className="text-muted-foreground mb-6">
                Serving all of San Diego County with 48+ years of experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-6" asChild>
                  <a href="tel:6197509125">
                    <Phone className="size-5" />
                    CALL NOW: (619) 750-9125
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-6 bg-transparent" asChild>
                  <a href="#estimate-form">Request An Estimate</a>
                </Button>
              </div>

              {/* Service Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div id="estimate-form" className="lg:sticky lg:top-24">
              <Card className="shadow-xl border-2">
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
                      defaultValue={defaultService}
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
                      placeholder="Tell us about your project..."
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

      {/* Service Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-lg text-muted-foreground">
                {overview}
              </p>
            </div>

            {/* What We Offer / Features */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="size-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Choose Us
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="size-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
            {ctaText}
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            No obligation. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg"
              asChild
            >
              <a href="tel:6197509125">
                <Phone className="size-5" />
                CALL NOW: (619) 750-9125
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-white/10 text-lg"
              asChild
            >
              <a href="#estimate-form">Request An Estimate</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
