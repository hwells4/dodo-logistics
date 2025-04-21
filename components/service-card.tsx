import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home, MoveRight, Laptop } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: "home" | "move" | "laptop"
  features: string[]
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "home":
        return <Home className="h-6 w-6" />
      case "move":
        return <MoveRight className="h-6 w-6" />
      case "laptop":
        return <Laptop className="h-6 w-6" />
      default:
        return <Home className="h-6 w-6" />
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <div className="h-12 w-12 rounded-full bg-[#6AACBF]/10 flex items-center justify-center text-[#6AACBF] mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-[#6AACBF] mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full border-[#6AACBF] text-[#6AACBF]">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}
