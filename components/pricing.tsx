import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the service that fits your needs with no hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Wash */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Basic Wash</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold tracking-tight text-gray-900">$12</span>
                <span className="ml-1 text-gray-500">/wash</span>
              </div>
              <p className="mt-2 text-gray-600">Perfect for regular maintenance and quick cleanups.</p>
            </div>
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Exterior wash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Wheel cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Spot-free rinse</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Air dry</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-6 bg-red-600 hover:bg-red-700">
                <a href="#contact">Choose Basic</a>
              </Button>
            </div>
          </div>

          {/* Premium Wash */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-red-500 transform scale-105 z-10">
            <div className="bg-red-500 py-2 text-center">
              <span className="text-white text-sm font-medium">MOST POPULAR</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Premium Wash</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold tracking-tight text-gray-900">$24</span>
                <span className="ml-1 text-gray-500">/wash</span>
              </div>
              <p className="mt-2 text-gray-600">The complete package for a showroom-quality finish.</p>
            </div>
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Triple foam polish</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Underbody wash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Tire shine</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Hand dry</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-6 bg-red-600 hover:bg-red-700">
                <a href="#contact">Choose Premium</a>
              </Button>
            </div>
          </div>

          {/* Vehicle Inspection */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Vehicle Inspection</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold tracking-tight text-gray-900">$25.50</span>
                <span className="ml-1 text-gray-500">/inspection</span>
              </div>
              <p className="mt-2 text-gray-600">State-required annual safety and emissions testing.</p>
            </div>
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Official TX inspection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Safety check</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Emissions testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">Digital records</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-6 bg-red-600 hover:bg-red-700">
                <a href="#contact">Schedule Inspection</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Looking for a complete package? Save with our combo deals!</p>
          <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
            <a href="#contact">View Combo Packages</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
