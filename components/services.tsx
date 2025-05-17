"use client"

import { useState } from "react"
import { services, categories } from "@/lib/services-data"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"

export function Services() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <section id="layanan" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Layanan Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Berbagai layanan profesional untuk memenuhi kebutuhan Anda
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`mb-2 ${
                activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service) => (
            <div key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
