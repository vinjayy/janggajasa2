"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AboutUs } from "@/components/about-us"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setIsMounted(true)

    // Set isLoaded to true after a short delay to ensure content is ready
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Only render the content after the component has mounted on the client
  if (!isMounted) {
    return null
  }

  return (
    <main className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
