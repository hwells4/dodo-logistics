import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="University Car Wash Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
              priority
              query="University Car Wash logo"
            />
            <span className="hidden font-bold sm:inline-block">University Car Wash</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-red-600 transition-colors">
            Services
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-red-600 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-red-600 transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+15125339274" className="hidden md:flex items-center gap-2 text-sm font-medium">
            <PhoneCall className="h-4 w-4" />
            <span>(512) 533-9274</span>
          </a>
          <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
