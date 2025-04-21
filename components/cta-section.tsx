import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="w-full py-16 bg-[#6AACBF]">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Book your free consultation today and take the first step toward a more organized, peaceful life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#6AACBF] hover:bg-neutral-100">
            Book Your Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  )
}
