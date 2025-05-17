import {
  Home,
  Grid,
  Fence,
  Truck,
  Layers,
  GraduationCap,
  Sparkles,
  Bed,
  Wind,
  Camera,
  Paintbrush,
  Key,
  UtensilsCrossed,
  Zap,
  Shield,
  Droplet,
  Sofa,
  type LucideIcon,
  BookOpen,
  Calculator,
} from "lucide-react"

export interface Service {
  id: string
  name: string
  description: string
  icon: LucideIcon
  category: "home" | "education" | "cleaning" | "media" | "other"
}

export const services: Service[] = [
  // Kategori Rumah & Properti
  {
    id: "perbaikan-atap",
    name: "Perbaikan Atap",
    description: "Perbaikan dan pemasangan atap rumah dengan material berkualitas dan tahan lama.",
    icon: Home,
    category: "home",
  },
  {
    id: "perbaikan-lantai",
    name: "Perbaikan Lantai",
    description: "Layanan perbaikan dan pemasangan lantai untuk berbagai jenis material.",
    icon: Grid,
    category: "home",
  },
  {
    id: "perbaikan-pagar",
    name: "Perbaikan Pagar",
    description: "Perbaikan dan instalasi pagar dengan berbagai pilihan material dan desain.",
    icon: Fence,
    category: "home",
  },
  {
    id: "plafon",
    name: "Plafon",
    description: "Pemasangan dan perbaikan plafon dengan berbagai pilihan material.",
    icon: Layers,
    category: "home",
  },
  {
    id: "service-ac",
    name: "Service AC",
    description: "Layanan perawatan dan perbaikan AC untuk kinerja optimal dan hemat energi.",
    icon: Wind,
    category: "home",
  },
  {
    id: "servis-elektronik",
    name: "Servis Barang Elektronik dan Kelistrikan",
    description: "Perbaikan berbagai peralatan elektronik dan instalasi kelistrikan rumah tangga.",
    icon: Zap,
    category: "home",
  },
  {
    id: "alarm-cctv",
    name: "Alarm & CCTV",
    description: "Pemasangan dan pemeliharaan sistem keamanan alarm dan CCTV untuk rumah dan bisnis.",
    icon: Shield,
    category: "home",
  },
  {
    id: "sedot-wc",
    name: "SeDOT WC",
    description: "Layanan sedot WC profesional dengan peralatan modern dan ramah lingkungan.",
    icon: Droplet,
    category: "home",
  },
  {
    id: "servis-sofa",
    name: "Servis Sofa",
    description: "Perbaikan, perawatan, dan restorasi sofa dengan hasil berkualitas.",
    icon: Sofa,
    category: "home",
  },
  {
    id: "servis-pagar-kanopi",
    name: "Servis Pagar Kanopi, Teralis, Rail Tangga, Folding Gate dll",
    description: "Layanan pembuatan dan perbaikan berbagai jenis pagar, kanopi, teralis, dan folding gate.",
    icon: Fence,
    category: "home",
  },

  // Kategori Pendidikan
  {
    id: "les-privat",
    name: "Les Privat",
    description: "Layanan les privat dengan pengajar berpengalaman untuk berbagai kebutuhan belajar.",
    icon: GraduationCap,
    category: "education",
  },
  {
    id: "les-mata-pelajaran",
    name: "Les Mata Pelajaran Sekolah",
    description: "Bimbingan belajar untuk semua mata pelajaran sekolah dari SD hingga SMA.",
    icon: BookOpen,
    category: "education",
  },
  {
    id: "les-calistung",
    name: "Les Baca Tulis Hitung",
    description: "Program pembelajaran khusus untuk anak-anak dalam kemampuan dasar membaca, menulis, dan berhitung.",
    icon: Calculator,
    category: "education",
  },

  // Kategori Pembersihan
  {
    id: "cleaning-service",
    name: "Cleaning Service",
    description: "Layanan pembersihan rumah dan kantor dengan standar kebersihan tinggi.",
    icon: Sparkles,
    category: "cleaning",
  },
  {
    id: "cuci-karpet",
    name: "Cuci Karpet",
    description: "Layanan cuci karpet profesional dengan hasil bersih dan higienis.",
    icon: Sparkles,
    category: "cleaning",
  },
  {
    id: "cuci-kasur",
    name: "Cuci Kasur",
    description: "Layanan cuci kasur untuk menghilangkan debu, tungau, dan bakteri.",
    icon: Bed,
    category: "cleaning",
  },
  {
    id: "cuci-sofa",
    name: "Cuci Sofa",
    description: "Layanan cuci sofa profesional untuk menghilangkan noda dan menjaga kebersihan sofa Anda.",
    icon: Sofa,
    category: "cleaning",
  },

  // Kategori Media & Digital
  {
    id: "fotografi-videografi",
    name: "Fotografi/Videografer",
    description:
      "Layanan fotografi dan videografi profesional untuk komersial makanan, prewedding, wedding, dan produk.",
    icon: Camera,
    category: "media",
  },
  {
    id: "interior-desain",
    name: "Interior Desain",
    description: "Jasa desain interior untuk rumah, kantor, dan ruang komersial dengan konsep modern dan fungsional.",
    icon: Paintbrush,
    category: "media",
  },

  // Kategori Lainnya
  {
    id: "pindahan",
    name: "Pindahan",
    description: "Layanan pindahan rumah dan kantor dengan penanganan barang yang aman.",
    icon: Truck,
    category: "other",
  },
  {
    id: "ahli-kunci",
    name: "Ahli Kunci",
    description:
      "Layanan ahli kunci profesional untuk membuka, memperbaiki, atau mengganti kunci rumah, mobil, dan brankas.",
    icon: Key,
    category: "other",
  },
  {
    id: "catering",
    name: "Catering",
    description: "Layanan catering untuk berbagai acara dengan menu bervariasi dan kualitas terjamin.",
    icon: UtensilsCrossed,
    category: "other",
  },
]

export const categories = [
  { id: "all", name: "Semua Layanan" },
  { id: "home", name: "Rumah & Properti" },
  { id: "education", name: "Pendidikan" },
  { id: "cleaning", name: "Pembersihan" },
  { id: "media", name: "Media & Digital" },
  { id: "other", name: "Lainnya" },
]
