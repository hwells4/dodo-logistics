import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import CTASection from "@/components/cta-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-neutral-100 to-white">
        <div className="container px-4 py-16 md:py-24 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
              Transform Your Space, <span className="text-[#6AACBF]">Reclaim Your Life</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 max-w-xl">
              Professional organizing solutions that bring calm and functionality to your home and workspace in Austin,
              TX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#6AACBF] hover:bg-[#5899ac] text-white">
                Book Your Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-[#6AACBF] text-[#6AACBF]">
                View Our Services
              </Button>
            </div>
            <div className="flex items-center gap-2 text-neutral-700">
              <CheckCircle className="h-5 w-5 text-[#6AACBF]" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/bright-airy-office.png"
              alt="Organized home space by Bluebird Organizing"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
              priority
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#6AACBF] flex items-center justify-center text-white font-medium border-2 border-white"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium">Happy Clients</p>
                  <p className="text-sm text-neutral-500">200+ Spaces Transformed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-16 bg-[url('/light-blue-undulation.png')] bg-no-repeat bg-cover"></div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Are You Feeling...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Overwhelmed by Clutter",
                description: "Struggling with spaces that cause stress rather than joy and relaxation",
                icon: "🔍",
              },
              {
                title: "Short on Time",
                description: "Too busy to tackle organizing projects that keep piling up",
                icon: "⏱️",
              },
              {
                title: "Going Through Changes",
                description: "Facing a move, downsizing, or major life transition",
                icon: "🔄",
              },
              {
                title: "Lacking Systems",
                description: "Missing functional organization systems that work for your lifestyle",
                icon: "📋",
              },
              {
                title: "Emotionally Attached",
                description: "Finding it difficult to let go of items with sentimental value",
                icon: "❤️",
              },
              {
                title: "Seeking Peace",
                description: "Wanting a calmer, more intentional living environment",
                icon: "✨",
              },
            ].map((point, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{point.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-neutral-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Organizing Solutions</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Customized organizing services to help you create functional, beautiful spaces that support your lifestyle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Home Organization"
              description="Transform cluttered spaces into functional, beautiful areas that bring calm to your daily life."
              icon="home"
              features={["Closets & Wardrobes", "Kitchens & Pantries", "Living Spaces", "Home Offices"]}
            />
            <ServiceCard
              title="Life Transitions"
              description="Get support during major life changes with compassionate organizing assistance."
              icon="move"
              features={["Moving & Relocating", "Downsizing", "Combining Households", "New Baby Preparation"]}
            />
            <ServiceCard
              title="Digital Organization"
              description="Bring order to your digital life with systems that save time and reduce stress."
              icon="laptop"
              features={["Photo Organization", "File Management", "Email Systems", "Digital Decluttering"]}
            />
          </div>
          <div className="text-center mt-12">
            <Button className="bg-[#6AACBF] hover:bg-[#5899ac] text-white">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We make getting organized easy with our proven 4-step approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We start with a free consultation to understand your needs and goals.",
              },
              {
                step: "2",
                title: "Custom Plan",
                description: "We create a tailored organization plan specific to your space and lifestyle.",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Our team works with you to sort, purge, and organize your belongings.",
              },
              {
                step: "4",
                title: "Maintenance",
                description: "We provide systems and tips to help you maintain your organized spaces.",
              },
            ].map((process, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#6AACBF] text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-neutral-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Hear from people who have transformed their spaces and lives with Bluebird Organizing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with Bluebird Organizing changed my life. My home is now a place of peace instead of stress."
              author="Sarah T."
              location="Austin, TX"
              rating={5}
            />
            <TestimonialCard
              quote="I was overwhelmed with my move, but their team made the process so much easier. Highly recommend!"
              author="Michael R."
              location="Cedar Park, TX"
              rating={5}
            />
            <TestimonialCard
              quote="The kitchen organization system they created for me has saved me hours every week. Worth every penny!"
              author="Jennifer L."
              location="Round Rock, TX"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Contact Form Section */}
      <section id="contact" className="w-full py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Ready to transform your space? Contact us today to schedule your free consultation or learn more about
                our services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#6AACBF]" />
                  <span>Austin, TX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#6AACBF]" />
                  <span>(512) 555-1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#6AACBF]" />
                  <span>hello@bluebirdorganizing.net</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#6AACBF]" />
                  <span>Office Hours: Monday - Friday, 9am - 5pm</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-neutral-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/bluebird-organizing-white-logo.png" alt="Bluebird Organizing" width={200} height={60} />
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#6AACBF] transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-[#6AACBF] transition-colors">
                About
              </a>
              <a href="#" className="hover:text-[#6AACBF] transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-[#6AACBF] transition-colors">
                Contact
              </a>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#6AACBF] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#6AACBF] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-6 pt-6 text-center text-neutral-400 text-sm">
            <p>© {new Date().getFullYear()} Bluebird Organizing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
