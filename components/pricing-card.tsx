import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  cta: string
  popular: boolean
}

export default function PricingCard({ title, price, description, features, cta, popular }: PricingCardProps) {
  return (
    <Card className={`h-full transition-all hover:shadow-lg ${popular ? "border-red-600 shadow-md" : ""}`}>
      <CardHeader>
        {popular && <Badge className="mb-2 self-start bg-red-600 text-white hover:bg-red-700">Most Popular</Badge>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-extrabold">{price}</span>
          <span className="ml-1 text-neutral-600">/service</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-neutral-600">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${popular ? "bg-red-600 hover:bg-red-700" : "bg-neutral-800 hover:bg-neutral-900"} text-white`}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
