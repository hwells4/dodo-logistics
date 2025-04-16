import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 h-12 w-48 relative">
              <Image src="/images/logo.png" alt="University Car Wash and Inspection" fill className="object-contain" />
            </div>
            <p className="mb-4 text-neutral-400">
              Austin's trusted destination for vehicle inspections and car washes since 1983.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white">
                  State Vehicle Inspection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Self-Service Car Wash
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Automatic Car Wash
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Combo Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Commercial Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Info</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>4328 Guadalupe St, Austin, TX 78751</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>(512) 533-9274</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>info@universitycw.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>Open Daily: 8AM - 7PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} University Car Wash and Inspection. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-neutral-400">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-neutral-400">
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
