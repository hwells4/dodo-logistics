import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
}

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-neutral-300"}`}
            />
          ))}
        </div>
        <blockquote className="mb-4 text-lg italic text-neutral-700">"{quote}"</blockquote>
        <p className="font-medium text-neutral-900">{author}</p>
      </CardContent>
    </Card>
  )
}
