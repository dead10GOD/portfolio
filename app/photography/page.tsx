import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PhotographyPage() {
  const categories = [
    { id: "nature", name: "Nature" },
    { id: "urban", name: "Urban" },
    { id: "portrait", name: "Portrait" },
    { id: "travel", name: "Travel" },
  ]

  const photos = {
    nature: [
      {
        id: 1,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Mountain landscape",
        caption: "Mountain sunrise in the Alps",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Forest path",
        caption: "Misty forest path in autumn",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Waterfall",
        caption: "Hidden waterfall in the rainforest",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Desert landscape",
        caption: "Desert dunes at sunset",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Ocean waves",
        caption: "Powerful ocean waves at the coast",
      },
      {
        id: 6,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Wildflowers",
        caption: "Field of wildflowers in spring",
      },
    ],
    urban: [
      { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "City skyline", caption: "City skyline at night" },
      {
        id: 2,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Street art",
        caption: "Colorful street art in the downtown district",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Architecture",
        caption: "Modern architectural marvel",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Subway station",
        caption: "Empty subway station at midnight",
      },
      { id: 5, src: "/placeholder.svg?height=600&width=800", alt: "City cafe", caption: "Cozy cafe on a rainy day" },
      { id: 6, src: "/placeholder.svg?height=800&width=600", alt: "Bridge", caption: "Historic bridge at sunset" },
    ],
    portrait: [
      {
        id: 1,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Professional portrait",
        caption: "Professional studio portrait",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Candid smile",
        caption: "Candid smile in natural light",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Artistic portrait",
        caption: "Artistic black and white portrait",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Environmental portrait",
        caption: "Environmental portrait of an artist",
      },
      { id: 5, src: "/placeholder.svg?height=800&width=600", alt: "Silhouette", caption: "Silhouette against sunset" },
      {
        id: 6,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Lifestyle portrait",
        caption: "Lifestyle portrait in the city",
      },
    ],
    travel: [
      { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "Ancient temple", caption: "Ancient temple at dawn" },
      { id: 2, src: "/placeholder.svg?height=800&width=600", alt: "Market scene", caption: "Vibrant local market" },
      { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Beach sunset", caption: "Tropical beach sunset" },
      {
        id: 4,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Mountain village",
        caption: "Remote mountain village",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Historic street",
        caption: "Historic cobblestone street",
      },
      {
        id: 6,
        src: "/placeholder.svg?height=800&width=600",
        alt: "Cultural festival",
        caption: "Local cultural festival",
      },
    ],
  }

  return (
    <div className="container px-4 md:px-6 py-10 md:py-14">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Photography</h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            A collection of my photographic work across various genres and styles.
          </p>
        </div>

        <Tabs defaultValue="nature" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(photos).map(([category, categoryPhotos]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPhotos.map((photo) => (
                  <div key={photo.id} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[4/3] w-full relative">
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white font-medium">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
