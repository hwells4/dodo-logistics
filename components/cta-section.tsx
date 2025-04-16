import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-red-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready for a Clean, Compliant Vehicle?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Don't wait in long lines at other inspection stations. Visit University Car Wash and Inspection for fast
          service and a clean car in one stop!
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="bg-white text-red-600 hover:bg-neutral-100 px-12 py-6 text-lg">
            Schedule Now
          </Button>
        </div>
      </div>
    </section>
  )
}
