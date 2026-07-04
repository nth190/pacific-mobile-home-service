import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const galleryItems = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    title: "Metal Roof Installation",
    location: "El Cajon, CA",
  },
]

const projectImages = [
  {
    image: "/Pictures/project_1.jpeg",
    title: "Completed Roofing Project",
    location: "San Diego County, CA",
  },
  {
    image: "/Pictures/project_2.jpeg",
    title: "Completed Roofing Project",
    location: "San Diego County, CA",
  },
  {
    image: "/Pictures/project_3.jpeg",
    title: "Completed Roofing Project",
    location: "San Diego County, CA",
  },
]



export function GallerySection() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from San Diego projects. See the difference professional roofing makes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={item.before}
                  alt={`Before: ${item.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                  Before
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={item.after}
                  alt={`After: ${item.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                  After
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            </div>
          ))}

         {projectImages.map((item, index) => (
  <div key={index} className="space-y-4">
    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div className="text-center">
      <h3 className="font-semibold text-foreground">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.location}</p>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  )
}
