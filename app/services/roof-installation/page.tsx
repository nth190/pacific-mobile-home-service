import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile Home Roof Installation | San Diego County",
  description: "High-quality roof installations for mobile and manufactured homes in San Diego. Protect your home with durable materials and expert craftsmanship.",
}

export default function RoofInstallationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePageLayout
          title="Mobile Home Roof Installation"
          subtitle="Durable, high-quality roofing built to last."
          heroImage="/Pictures/project_1.jpeg"
          overview="A new roof improves your home's protection, value, and energy efficiency. We install roofs specifically designed for mobile homes, using materials that perform well in the San Diego climate. Our experienced team ensures proper installation for decades of reliable protection."
          features={[
            "Full roof replacement",
            "New construction installation",
            "Energy-efficient roofing options",
            "Multiple material choices",
            "Professional removal of old roofing",
            "Complete cleanup included",
          ]}
          whyChooseUs={[
            "48+ years of installation expertise",
            "Materials designed for San Diego climate",
            "Manufacturer warranties honored",
            "Licensed and insured",
            "Free detailed estimates",
            "Family-owned and operated",
          ]}
          ctaText="Ready for a New Roof? Request an Estimate"
          defaultService="Roof Installation"
        />
      </main>
      <Footer />
    </div>
  )
}
