import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Metal Roofing for Mobile Homes | San Diego County",
  description: "Durable, energy-efficient metal roofing for mobile homes in San Diego. Long-lasting protection with minimal maintenance",
}

export default function MetalRoofingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePageLayout
          title="Metal Roofing for Mobile Homes"
          subtitle="Long-lasting, energy-efficient roofing solution."
          heroImage="/images/after-1.jpg"
          overview="Metal roofing is one of the most durable options available. It reflects heat, reduces energy costs, and lasts for decades. Perfect for San Diego's weather conditions, metal roofs provide superior protection while lowering your cooling bills during hot summer months."
          features={[
            "30-50 year lifespan",
            "Low maintenance requirements",
            "Heat resistant and reflective",
            "Multiple color options",
            "Weather resistant",
            "Eco-friendly and recyclable",
          ]}
          whyChooseUs={[
            "Specialized in metal roof installation",
            "Expert fitting for mobile homes",
            "Reduces energy costs significantly",
            "Withstands San Diego sun and heat",
            "Long-term investment value",
            "Professional installation guaranteed",
          ]}
          ctaText="Interested in Metal Roofing? Request an Estimate"
          defaultService="Metal Roofing"
        />
      </main>
      <Footer />
    </div>
  )
}
