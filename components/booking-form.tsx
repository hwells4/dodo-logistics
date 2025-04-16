"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit the form data to a server
    console.log("Form submitted:", formState)
    alert("Thank you! Your appointment has been scheduled. We will confirm shortly.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Card className="bg-white text-neutral-900">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Smith"
              required
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(512) 555-1234"
                required
                value={formState.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service</Label>
            <Select onValueChange={(value) => handleSelectChange("service", value)} value={formState.service}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inspection">State Inspection</SelectItem>
                <SelectItem value="wash">Car Wash</SelectItem>
                <SelectItem value="combo">Inspection & Wash Combo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" name="date" type="date" required value={formState.date} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select onValueChange={(value) => handleSelectChange("time", value)} value={formState.time}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8AM-11AM)</SelectItem>
                  <SelectItem value="midday">Midday (11AM-2PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (2PM-5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM-7PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
            Schedule Appointment
          </Button>

          <p className="text-center text-sm text-neutral-500">
            We'll confirm your appointment via email and text message.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
