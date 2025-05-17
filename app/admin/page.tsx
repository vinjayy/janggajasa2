import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LayoutDashboard, ListPlus, MessageSquare, Users } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>
        <p className="text-muted-foreground">
          Selamat datang di panel admin Janggajasa. Kelola layanan dan testimonial dari sini.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Layanan</CardTitle>
            <ListPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Layanan aktif yang ditampilkan di website</p>
            <Button asChild className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="/admin/services">Kelola Layanan</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Testimonial</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Testimonial pelanggan yang ditampilkan</p>
            <Button asChild className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="/admin/testimonials">Kelola Testimonial</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pengunjung Website</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Pengunjung dalam 30 hari terakhir</p>
            <Button asChild className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="/admin/analytics">Lihat Statistik</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
            <CardDescription>5 aktivitas terbaru pada sistem</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Layanan baru ditambahkan</p>
                  <p className="text-sm text-muted-foreground">Admin menambahkan layanan "Jasa Desain Interior"</p>
                  <p className="text-xs text-muted-foreground">2 jam yang lalu</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Testimonial baru</p>
                  <p className="text-sm text-muted-foreground">Testimonial dari "Ahmad Fauzi" telah ditambahkan</p>
                  <p className="text-xs text-muted-foreground">Kemarin, 15:30</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Layanan diperbarui</p>
                  <p className="text-sm text-muted-foreground">Admin memperbarui deskripsi layanan "Service AC"</p>
                  <p className="text-xs text-muted-foreground">Kemarin, 10:15</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pintasan</CardTitle>
            <CardDescription>Akses cepat ke fitur-fitur utama</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button asChild variant="outline" className="justify-start">
              <Link href="/admin/services/new">
                <ListPlus className="mr-2 h-4 w-4" />
                Tambah Layanan Baru
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/admin/testimonials/new">
                <MessageSquare className="mr-2 h-4 w-4" />
                Tambah Testimonial Baru
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/" target="_blank">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Lihat Website
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
