"use client"

import type { Service } from "@/lib/services-data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{service.name}</h3>
          <p className="text-gray-500 text-sm">{service.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-center">
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={() =>
            window.open(
              `https://wa.me/6281234400591?text=Halo, saya tertarik dengan layanan ${service.name} dari Jangga Jasa.`,
              "_blank",
            )
          }
        >
          Pesan Sekarang
        </Button>
      </CardFooter>
    </Card>
  )
}
