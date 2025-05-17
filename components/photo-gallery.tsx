import Image from "next/image"

export function PhotoGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Galeri Layanan Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Lihat hasil kerja dan aktivitas tim Janggajasa</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Cleaning Service"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">Cleaning Service</h3>
              <p className="text-gray-600 text-sm">Layanan pembersihan profesional</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Perbaikan Rumah"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">Perbaikan Rumah</h3>
              <p className="text-gray-600 text-sm">Layanan perbaikan dan renovasi</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Les Bahasa"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">Les Bahasa</h3>
              <p className="text-gray-600 text-sm">Kursus bahasa dengan pengajar profesional</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Pengeditan Video"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">Pengeditan Video</h3>
              <p className="text-gray-600 text-sm">Layanan editing video profesional</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Service AC"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">Service AC</h3>
              <p className="text-gray-600 text-sm">Perawatan dan perbaikan AC</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Pest Control"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">Pest Control</h3>
              <p className="text-gray-600 text-sm">Pengendalian hama profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
