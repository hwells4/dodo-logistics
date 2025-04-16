import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-neutral-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" aria-hidden="true" />
        <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center z-0" aria-hidden="true" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <div className="flex items-center gap-2 bg-red-600/90 text-white text-sm font-medium py-1 px-3 rounded-full w-fit">
              <Star className="h-4 w-4 fill-white" />
              <span>Family Owned for Over 40 Years</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Austin's Premier Car Wash & Vehicle Inspection
            </h1>
            <p className="text-lg text-white/90 max-w-md">
              Get your car sparkling clean and inspection-ready in one convenient stop. Save time and drive with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <a href="#pricing">View Our Services</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Book Now <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-500" />
                <span>Open 7 Days a Week</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Austin, TX 78751</span>
              </div>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Quick Appointment</h2>
              <p className="text-gray-600">Get your car wash or inspection scheduled in seconds</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="(512) xxx-xxxx"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service
                </label>
                <select
                  id="service"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                >
                  <option>Select a service</option>
                  <option>Basic Wash</option>
                  <option>Premium Wash</option>
                  <option>Vehicle Inspection</option>
                  <option>Wash + Inspection</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Schedule Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
