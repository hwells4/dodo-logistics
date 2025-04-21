import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export default function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
        <blockquote className="text-lg italic mb-4 flex-grow">"{quote}"</blockquote>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-neutral-500">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}
