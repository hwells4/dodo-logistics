import { Shield, Droplets, Clock, Award, Car, CheckCircle } from "lucide-react"

export default function Features() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose University Car Wash?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We combine quality service with convenience to give you the best car care experience in Austin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Droplets className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Spotless Results</h3>
            <p className="text-gray-600">
              Our advanced cleaning technology and premium products ensure your vehicle shines like new every time.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Official Inspection Station</h3>
            <p className="text-gray-600">
              State-certified inspectors ensure your vehicle meets all Texas safety and emissions requirements.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
            <p className="text-gray-600">
              Get in and out fast with our efficient service process. Most services completed in under 30 minutes.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">40+ Years Experience</h3>
            <p className="text-gray-600">
              Family-owned and operated since 1983, we bring decades of expertise to every service we provide.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Car className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">All Vehicles Welcome</h3>
            <p className="text-gray-600">
              From compact cars to SUVs and trucks, our facilities accommodate all vehicle types and sizes.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-600">
              Not happy with your service? Let us know and we'll make it right. Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
