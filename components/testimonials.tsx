"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  service: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pemilik Rumah",
    avatar: "/testi-4.jpeg?height=100&width=100",
    content:
      "Saya sangat puas dengan layanan perbaikan atap dari Jangga Jasa. Tim mereka bekerja dengan cepat dan profesional. Hasilnya sangat memuaskan!",
    rating: 5,
    service: "Perbaikan Atap",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Ibu Rumah Tangga",
    avatar: "/testi-1.jpeg?height=100&width=100",
    content:
      "Cleaning service dari Jangga Jasa benar-benar membuat rumah saya bersih dan rapi. Mereka sangat teliti dan ramah. Pasti akan menggunakan jasa mereka lagi.",
    rating: 5,
    service: "Cleaning Service",
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Mahasiswa",
    avatar: "/testi-3.jpeg?height=100&width=100",
    content:
      "Les privat dari Jangga Jasa sangat membantu meningkatkan kemampuan belajar saya. Pengajarnya sabar dan metode pembelajarannya menyenangkan.",
    rating: 4,
    service: "Les Privat",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Content Creator",
    avatar: "/testi-2.jpeg?height=100&width=100",
    content:
      "Jasa fotografi dari Jangga Jasa sangat profesional. Mereka memahami kebutuhan saya dan memberikan hasil yang melebihi ekspektasi.",
    rating: 5,
    service: "Fotografi/Videografer",
  },
  {
    id: 5,
    name: "Rudi Hartono",
    role: "Pengusaha",
    avatar: "/testi-5.jpeg?height=100&width=100",
    content:
      "Jasa pindahan dari Jangga Jasa sangat membantu. Mereka menangani barang-barang dengan hati-hati dan proses pindahannya berjalan lancar.",
    rating: 4,
    service: "Pindahan",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxVisibleItems = 3
  const maxIndex = testimonials.length - maxVisibleItems

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <section id="testimonial" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Apa Kata Pelanggan Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Testimoni dari pelanggan yang telah menggunakan layanan Jangga Jasa
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / maxVisibleItems)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-3">{testimonial.content}</p>
                      <p className="text-sm font-medium text-blue-600">Layanan: {testimonial.service}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg z-10 hidden md:flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110"
            onClick={prevSlide}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg z-10 hidden md:flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110"
            onClick={nextSlide}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2 md:hidden">
          {[...Array(testimonials.length - maxVisibleItems + 1)].map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full ${currentIndex === i ? "bg-blue-600" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
