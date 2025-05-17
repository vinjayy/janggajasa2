import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Edit, Plus, Star, Trash } from "lucide-react"

// Data testimonial (biasanya akan diambil dari database)
const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pemilik Rumah",
    content:
      "Saya sangat puas dengan layanan perbaikan atap dari Janggajasa. Tim mereka bekerja dengan cepat dan profesional. Hasilnya sangat memuaskan!",
    rating: 5,
    service: "Perbaikan Atap",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Ibu Rumah Tangga",
    content:
      "Cleaning service dari Janggajasa benar-benar membuat rumah saya bersih dan rapi. Mereka sangat teliti dan ramah. Pasti akan menggunakan jasa mereka lagi.",
    rating: 5,
    service: "Cleaning Service",
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Mahasiswa",
    content:
      "Les bahasa Inggris dari Janggajasa sangat membantu meningkatkan kemampuan bahasa Inggris saya. Pengajarnya sabar dan metode pembelajarannya menyenangkan.",
    rating: 4,
    service: "Les Bahasa Inggris",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Content Creator",
    content:
      "Hasil pengeditan video dari Janggajasa sangat profesional. Mereka memahami kebutuhan saya dan memberikan hasil yang melebihi ekspektasi.",
    rating: 5,
    service: "Pengeditan Video",
  },
  {
    id: 5,
    name: "Rudi Hartono",
    role: "Pengusaha",
    content:
      "Jasa pindahan dari Janggajasa sangat membantu. Mereka menangani barang-barang dengan hati-hati dan proses pindahannya berjalan lancar.",
    rating: 4,
    service: "Pindahan",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manajemen Testimonial</h1>
          <p className="text-muted-foreground">Kelola testimonial pelanggan yang ditampilkan di website</p>
        </div>
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
          <Link href="/admin/testimonials/new">
            <Plus className="mr-2 h-4 w-4" /> Tambah Testimonial
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Testimonial</CardTitle>
          <CardDescription>Total {testimonials.length} testimonial tersedia</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Layanan</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Testimonial</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </TableCell>
                  <TableCell>{testimonial.service}</TableCell>
                  <TableCell>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{testimonial.content}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="outline" size="icon" className="text-red-500">
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
