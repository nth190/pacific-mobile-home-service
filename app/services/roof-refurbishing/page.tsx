import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roof Refurbishing Services | San Diego County",
  description: "Extend the life of your mobile home roof without full replacement. Cost-effective refurbishing services in San Diego. Free inspections.",
}

export default function RoofRefurbishingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePageLayout
          title="Roof Refurbishing Services"
          subtitle="Extend your roof life without full replacement."
          heroImage="/Pictures/project_1.jpeg"
          overview="If your roof is aging but still structurally sound, refurbishing is a smart and cost-effective option. We restore and reinforce your existing roof to improve performance, saving you thousands compared to a full replacement while extending your roof's life by many years."
          features={[
            "Professional sealing",
            "Surface repair and restoration",
            "Waterproofing treatments",
            "Coating application",
            "Structural reinforcement",
            "Preventive maintenance",
          ]}
          whyChooseUs={[
            "Cost-effective alternative to replacement",
            "Extends roof life 10-15 years",
            "Quality materials and coatings",
            "Minimal disruption to your home",
            "Environmentally friendly option",
            "Honest assessment of roof condition",
          ]}
          ctaText="Want to Extend Your Roof Life? Request a Free Assessment"
          defaultService="Roof Refurbishing"
        />
      </main>
      <Footer />
    </div>
  )
}
