import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Austin Drivers</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "I've been coming to University Car Wash for years. Their attention to detail is amazing, and my car
              always looks brand new when they're done. The inspection service is quick and painless too!"
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                <Image src="/diverse-group-smiling.png" alt="Customer" width={40} height={40} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Michael T.</h4>
                <p className="text-sm text-gray-500">Loyal customer for 5+ years</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "As a busy mom, I appreciate how I can get my car washed and inspected in one stop. The staff is always
              friendly and they're great with kids. The convenience factor alone makes this place worth it!"
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                <Image src="/diverse-group-smiling.png" alt="Customer" width={40} height={40} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Sarah K.</h4>
                <p className="text-sm text-gray-500">Austin resident</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-neutral-50 p-6 rounded-lg border border-gray-100">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "I was dreading getting my vehicle inspection, but University Car Wash made it so easy. No long waits,
              friendly service, and they even pointed out a minor issue I could fix before it became a problem. Highly
              recommend!"
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                <Image src="/diverse-group-smiling.png" alt="Customer" width={40} height={40} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">David R.</h4>
                <p className="text-sm text-gray-500">First-time customer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">4.8/5</div>
            <p className="text-sm text-gray-600">Google Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">10,000+</div>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">40+</div>
            <p className="text-sm text-gray-600">Years in Business</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <p className="text-sm text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
