import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bluebird Organizing | Professional Home Organization Services in Austin, TX",
  description:
    "Transform your space and reclaim your life with professional organizing services from Bluebird Organizing. Serving Austin and surrounding areas.",
  keywords:
    "home organization, professional organizer, decluttering, Austin TX, home office organization, closet organization, kitchen organization",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img src="/bluebird-organizing-logo.png" alt="Bluebird Organizing" width={160} height={40} />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-neutral-700 hover:text-[#6AACBF] transition-colors">
              Home
            </a>
            <a href="#" className="text-neutral-700 hover:text-[#6AACBF] transition-colors">
              About
            </a>
            <a href="#" className="text-neutral-700 hover:text-[#6AACBF] transition-colors">
              Services
            </a>
            <a href="#" className="text-neutral-700 hover:text-[#6AACBF] transition-colors">
              Contact
            </a>
          </nav>
          <div>
            <a
              href="#contact"
              className="hidden md:inline-flex bg-[#6AACBF] hover:bg-[#5899ac] text-white px-4 py-2 rounded-md transition-colors"
            >
              Book Free Consultation
            </a>
            <button className="md:hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
