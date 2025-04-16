"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, MapPin, Phone, Star, Calendar, Shield } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import PricingCard from "@/components/pricing-card"
import BookingForm from "@/components/booking-form"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/hero-background.jpg"
            alt="Clean car at University Car Wash"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-red-600 text-white hover:bg-red-700">Family Owned Since 1983</Badge>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Austin's Most Trusted
              <br />
              Car Wash & Inspection Service
            </h1>
            <p className="mb-8 text-xl text-neutral-200">
              Save time and money with our convenient 2-in-1 service. Get your vehicle inspected and washed in one
              visit!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                Schedule Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-neutral-900 focus:bg-white focus:text-neutral-900"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-neutral-200">
              <Clock size={16} />
              <span>Open 7 Days: 8AM - 7PM</span>
              <span className="mx-2">|</span>
              <MapPin size={16} />
              <span>4328 Guadalupe St, Austin, TX 78751</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-center">
              <Star className="mr-2 h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium sm:text-base">4.8/5 Rating</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
              <span className="text-sm font-medium sm:text-base">State Certified</span>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5 text-neutral-700" />
              <span className="text-sm font-medium sm:text-base">40+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center">
              <Shield className="mr-2 h-5 w-5 text-neutral-700" />
              <span className="text-sm font-medium sm:text-base">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              We offer comprehensive vehicle care services to keep your car clean, compliant, and running smoothly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="State Vehicle Inspection"
              description="Quick, thorough inspections by certified technicians. Get your state-required inspection done in minutes."
              icon="Shield"
              features={["15-minute service", "State certified", "Digital records"]}
              cta="Schedule Inspection"
            />

            <ServiceCard
              title="Self-Service Car Wash"
              description="High-pressure equipment and premium cleaning products to make your car shine."
              icon="Droplets"
              features={["24/7 availability", "Multiple wash bays", "Powerful equipment"]}
              cta="Learn More"
            />

            <ServiceCard
              title="Automatic Car Wash"
              description="Drive through our state-of-the-art automatic wash for a thorough clean without leaving your car."
              icon="Car"
              features={["5-minute service", "Touchless options", "Spot-free rinse"]}
              cta="See Wash Options"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose University Car Wash?</h2>
              <p className="mb-8 text-lg text-neutral-600">
                For over 40 years, we've been Austin's trusted destination for vehicle inspections and car washes. Our
                family-owned business combines convenience, quality, and exceptional service.
              </p>

              <ul className="space-y-4">
                {[
                  "Save time with our 2-in-1 inspection and car wash service",
                  "Certified inspectors with decades of experience",
                  "Convenient location near UT Austin campus",
                  "Eco-friendly cleaning products and water conservation",
                  "Family-owned and operated since 1983",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image src="/images/facility.jpg" alt="University Car Wash facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Affordable options for every vehicle and budget. No hidden fees or surprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="State Inspection"
              price="$35.00"
              description="Quick, thorough state inspection for most passenger vehicles."
              features={["15-minute service", "Certified inspectors", "Digital records", "All passenger vehicles"]}
              cta="Schedule Inspection"
              popular={false}
            />

            <PricingCard
              title="Wash & Inspection"
              price="$85.00"
              description="Our most popular package! Get your inspection and a basic wash in one visit."
              features={[
                "Save time and money",
                "Exterior wash included",
                "Vacuum available",
                "Digital inspection record",
              ]}
              cta="Book This Package"
              popular={true}
            />

            <PricingCard
              title="Premium Wash"
              price="$65.00"
              description="Our deluxe automatic wash with all the extras for a showroom shine."
              features={["Triple-foam polish", "Undercarriage wash", "Wheel cleaning", "Rain-X treatment"]}
              cta="Choose This Wash"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Don't just take our word for it. Here's what Austin residents have to say about our service.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="I've been coming here for years. Quick inspections, friendly staff, and the car wash always leaves my car spotless."
              author="Michael T."
              rating={5}
            />

            <TestimonialCard
              quote="So convenient to get my inspection and car wash done in one stop. Saved me time and the price was great too!"
              author="Sarah L."
              rating={5}
            />

            <TestimonialCard
              quote="The staff is knowledgeable and efficient. In and out for my inspection in under 15 minutes. Will definitely return."
              author="David R."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="contact" className="bg-neutral-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Schedule Your Service</h2>
              <p className="mb-8 text-lg text-neutral-300">
                Book your inspection or car wash in advance to save time. We'll be ready when you arrive.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-neutral-300">4328 Guadalupe St, Austin, TX 78751</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-neutral-300">Monday - Sunday: 8:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-medium">Contact</h3>
                    <p className="text-neutral-300">(512) 533-9274</p>
                  </div>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
