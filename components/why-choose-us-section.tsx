import Image from "next/image"

const features = [
  {
    title: "Licensed & Insured",
    description:
      "As a licensed and insured company, our dedication to professionalism shines through in our complete roofing services, ensuring the longevity and resilience of your mobile home roof.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8 text-primary" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
  {
    title: "48 Years of Experience",
    description:
      "With nearly five decades of experience in mobile home roofing, we've seen it all and fixed it all. Trust our expertise to handle any roofing challenge you face.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8 text-primary" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
  },
  {
    title: "Family-Owned Business",
    description:
      "We're a family-owned business that treats every customer like family. You'll get personalized service and attention to detail that larger companies just can't match.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8 text-primary" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: "Metal Roof Experts",
    description:
      "We specialize in metal roofing for mobile homes. Metal roofs are durable, energy-efficient, and perfect for the San Diego climate.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8 text-primary" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/>
      </svg>
    ),
  },
  {
    title: "San Diego County Service",
    description:
      "We proudly serve all of San Diego County. From Oceanside to Chula Vista, we're your local mobile home roofing experts.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8 text-primary" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },

]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We&apos;re committed to providing the best mobile home roofing services in San Diego County.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.slice(0, 4).map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <Image
              src="/Pictures/project_1.jpeg"
              alt="Professional roofing work"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {features.slice(4).map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
