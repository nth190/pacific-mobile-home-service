import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile Home Roof Repair | San Diego County",
  description: "Fast, reliable roof repair services for mobile homes in San Diego. Fix leaks, damage, and wear before they become bigger problems. Free inspections.",
}

export default function RoofRepairPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicePageLayout
          title="Mobile Home Roof Repair in San Diego County"
          subtitle="Fast, reliable repairs for leaks, damage, and wear."
          heroImage="/Pictures/project_1.jpeg"
          overview="Your roof is your first line of protection. Even a small leak can quickly turn into serious damage if not fixed early. We specialize in mobile home roof repair across San Diego County. Our team quickly identifies issues and provides long-lasting solutions, not temporary fixes."
          features={[
            "Roof leak detection and repair",
            "Water damage restoration",
            "Cracked materials replacement",
            "Storm damage repair",
            "Seal and flashing repairs",
            "Preventive maintenance",
          ]}
          whyChooseUs={[
            "48+ years of specialized experience",
            "Fast response times",
            "Licensed and insured",
            "Long-lasting repairs, not quick fixes",
            "Free inspections",
            "Local San Diego County experts",
          ]}
          ctaText="Need Roof Repair? Request a Free Inspection"
          defaultService="Roof Repair"
        />
      </main>
      <Footer />
    </div>
  )
}
