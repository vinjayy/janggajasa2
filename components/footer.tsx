"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="w-32 h-auto" />
            </div>
            <p className="text-gray-300 mb-4">
              Solusi terbaik untuk berbagai kebutuhan jasa rumah tangga, pendidikan, dan bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/janggajasa"
                target="_blank"
                className="text-gray-300 hover:text-blue-400"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://facebook.com/janggajasa"
                target="_blank"
                className="text-gray-300 hover:text-blue-400"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/janggajasa" target="_blank" className="text-gray-300 hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Layanan Populer</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234400591?text=Halo, saya tertarik dengan layanan Cleaning Service dari Jangga Jasa.`,
                      "_blank",
                    )
                  }
                  className="text-gray-300 hover:text-blue-400 cursor-pointer"
                >
                  Cleaning Service
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234400591?text=Halo, saya tertarik dengan layanan Service AC dari Jangga Jasa.`,
                      "_blank",
                    )
                  }
                  className="text-gray-300 hover:text-blue-400 cursor-pointer"
                >
                  Service AC
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234400591?text=Halo, saya tertarik dengan layanan Les Privat dari Jangga Jasa.`,
                      "_blank",
                    )
                  }
                  className="text-gray-300 hover:text-blue-400 cursor-pointer"
                >
                  Les Privat
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234400591?text=Halo, saya tertarik dengan layanan Perbaikan Rumah dari Jangga Jasa.`,
                      "_blank",
                    )
                  }
                  className="text-gray-300 hover:text-blue-400 cursor-pointer"
                >
                  Perbaikan Rumah
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234400591?text=Halo, saya tertarik dengan layanan Fotografi/Videografer dari Jangga Jasa.`,
                      "_blank",
                    )
                  }
                  className="text-gray-300 hover:text-blue-400 cursor-pointer"
                >
                  Fotografi/Videografer
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span>0812-3440-0591</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span>info@janggajasa.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span>Jl. Evakuasi No.1A, Karyamulya, Kec. Kesambi, Kota Cirebon, Jawa Barat 45135</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jangga Jasa. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
