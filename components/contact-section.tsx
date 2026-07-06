"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
  
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to get started? Contact us today and we&apos;ll help protect your home.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:6197509125"
                className="flex items-center gap-4 p-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
              >
                <div className="size-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="size-7" />
                </div>
                <div>
                  <p className="font-bold text-xl">(619) 750-9125</p>
                  <p className="text-primary-foreground/80">CALL NOW</p>
                </div>
              </a>

              <a
                href="mailto:themobilehomepro@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="size-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">themobilehomepro@gmail.com</p>
                  <p className="text-muted-foreground text-sm">Send us an email</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="size-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">San Diego County</p>
                  <p className="text-muted-foreground text-sm">Serving all of San Diego County</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="size-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Business Hours</p>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 9am-5pm</p>
                  <p className="text-muted-foreground text-sm">Weekend appointments available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-primary">
                Request An Estimate
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Get a response within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form
  action="https://formsubmit.co/6516e5eb304ca1bb96eaaed8b5488b7a"
  method="POST"
  className="space-y-4"
>
  <input type="hidden" name="_subject" value="New website contact request" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://www.pacificmobilehomeservice.com/#contact" />

  <div className="grid sm:grid-cols-2 gap-4">
    <Input name="Name" placeholder="Name *" required />
    <Input name="Phone" type="tel" placeholder="Phone Number *" required />
  </div>

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
    className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
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
    </section>
  )
}
