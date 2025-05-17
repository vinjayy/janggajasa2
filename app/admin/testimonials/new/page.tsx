"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { services } from "@/lib/services-data"
import { useState } from "react"
import { ArrowLeft, Save, Star } from "lucide-react"
import Link from "next/link"

export default function NewTestimonialPage() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    service: "",
    rating: 5,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementasi penyimpanan data akan ditambahkan di sini
    console.log("Form submitted:", formData)
    alert("Testimonial berhasil ditambahkan!")
    // Reset form
    setFormData({
      name: "",
      role: "",
      content: "",
      service: "",
      rating: 5,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/admin/testimonials">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tambah Testimonial Baru</h1>
          <p className="text-muted-foreground">Tambahkan testimonial pelanggan baru ke website</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Detail Testimonial</CardTitle>
            <CardDescription>Masukkan informasi testimonial yang akan ditambahkan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Pelanggan</Label>
              <Input
                id="name"
                name="name"
                placeholder="Masukkan nama pelanggan"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Profesi/Peran</Label>
              <Input
                id="role"
                name="role"
                placeholder="Contoh: Pemilik Rumah, Mahasiswa, dll."
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Layanan yang Digunakan</Label>
              <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih layanan" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Rating</Label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= formData.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Isi Testimonial</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Masukkan isi testimonial dari pelanggan"
                value={formData.content}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/admin/testimonials">Batal</Link>
            </Button>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="mr-2 h-4 w-4" /> Simpan Testimonial
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
