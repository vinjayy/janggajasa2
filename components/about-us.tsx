import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutUs() {
  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/tukang.jpeg?height=600&width=800"
                alt="Tim Jangga Jasa"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden shadow-md">
                <Image
                  src="/pengajar.jpeg?height=200&width=200"
                  alt="Layanan Jangga Jasa"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden shadow-md">
                <Image
                  src="/bersih.jpeg?height=200&width=200"
                  alt="Layanan Jangga Jasa"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden shadow-md">
                <Image
                  src="/fotografi.jpeg?height=200&width=200"
                  alt="Layanan Jangga Jasa"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Tentang Jangga Jasa</h2>
            <p className="mt-4 text-lg text-gray-500">
              Jangga Jasa adalah penyedia layanan terpercaya yang telah melayani ribuan pelanggan dengan berbagai
              kebutuhan jasa. Kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan harga yang kompetitif.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Mengapa Memilih Kami?</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-500">Tim profesional dan berpengalaman</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-500">Layanan berkualitas dengan harga terjangkau</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-500">Respon cepat dan tepat waktu</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-500">Garansi kepuasan pelanggan</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-500">Cakupan layanan yang luas</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Visi Kami</h3>
              <p className="mt-2 text-gray-500">
                Menjadi penyedia jasa terdepan yang menjadi pilihan utama masyarakat Indonesia dengan layanan
                berkualitas dan profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
