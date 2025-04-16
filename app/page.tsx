import type { Metadata } from "next"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "University Car Wash | Austin's Premier Car Wash & Vehicle Inspection",
  description:
    "Family-owned for over 40 years, University Car Wash offers top-quality car wash services and vehicle inspections in Austin, TX. Visit us today!",
  keywords: "car wash, vehicle inspection, Austin, Texas, auto detailing, self service car wash",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
