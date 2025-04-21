"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <div className="bg-neutral-50 p-6 rounded-lg">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-neutral-600">Your message has been received. We'll get back to you within 24 hours.</p>
          <Button className="mt-6 bg-[#6AACBF] hover:bg-[#5899ac]" onClick={() => setIsSuccess(false)}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name*</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input id="lastName" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service Interested In</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home Organization</SelectItem>
                <SelectItem value="transition">Life Transitions</SelectItem>
                <SelectItem value="digital">Digital Organization</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} />
          </div>
          <Button type="submit" className="w-full bg-[#6AACBF] hover:bg-[#5899ac]" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  )
}
