import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Phone } from "lucide-react"

const testimonials = [
  {
    name: "Robert M.",
    location: "Chula Vista, CA",
    text: "Outstanding work on our mobile home roof! They were professional, on time, and the quality exceeded our expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Maria S.",
    location: "Encinitas, CA",
    text: "After getting quotes from several companies, we chose Pacific Mobile Home Service. Fair pricing and excellent craftsmanship. Couldn't be happier!",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Lakeside, CA",
    text: "The team was incredibly knowledgeable about mobile home roofs. They explained everything clearly and completed the job faster than expected.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            San Diego homeowners trust us with their roofing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="tel:6197509125">
              <Phone className="size-5" />
              Call Today !
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
