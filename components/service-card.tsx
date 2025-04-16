import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Droplets, Shield, Car } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features: string[]
  cta: string
}

export default function ServiceCard({ title, description, icon, features, cta }: ServiceCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Shield":
        return <Shield className="h-10 w-10 text-red-600" />
      case "Droplets":
        return <Droplets className="h-10 w-10 text-red-600" />
      case "Car":
        return <Car className="h-10 w-10 text-red-600" />
      default:
        return <Shield className="h-10 w-10 text-red-600" />
    }
  }

  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-4">
          <IconComponent />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-neutral-600">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-neutral-800 text-white hover:bg-neutral-900">{cta}</Button>
      </CardFooter>
    </Card>
  )
}
