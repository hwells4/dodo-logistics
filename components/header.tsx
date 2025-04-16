"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md text-neutral-900" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-12 w-48">
            <Image
              src="/images/logo.png"
              alt="University Car Wash and Inspection"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium hover:text-red-600">
              Home
            </a>
            <a href="#services" className="font-medium hover:text-red-600">
              Services
            </a>
            <a href="#about" className="font-medium hover:text-red-600">
              About Us
            </a>
            <a href="#pricing" className="font-medium hover:text-red-600">
              Pricing
            </a>
            <a href="#contact" className="font-medium hover:text-red-600">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-red-600 text-white hover:bg-red-700">
              <Phone className="mr-2 h-4 w-4" />
              (512) 533-9274
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-neutral-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-neutral-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-neutral-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="py-2 font-medium hover:text-red-600" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
              <a
                href="#services"
                className="py-2 font-medium hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#pricing"
                className="py-2 font-medium hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="py-2 font-medium hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="py-2 font-medium hover:text-red-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-red-600 text-white hover:bg-red-700">
                <Phone className="mr-2 h-4 w-4" />
                (512) 533-9274
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
