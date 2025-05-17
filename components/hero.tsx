"use client"

import { SearchBar } from "./search-bar"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden py-12 md:py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="wave"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10 text-center">
          <main className="mx-auto max-w-3xl">
            <div suppressHydrationWarning>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Solusi Jasa Terbaik</span>
                <span className="block text-blue-200">untuk Kebutuhan Anda</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Jangga Jasa menyediakan berbagai layanan profesional untuk membantu menyelesaikan kebutuhan rumah
                tangga, pendidikan, dan bisnis Anda dengan kualitas terbaik.
              </p>
              <div className="mt-8 max-w-md mx-auto">
                <SearchBar />
              </div>
              <div className="mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                    onClick={() => window.open(`https://wa.me/6281234400591`, "_blank")}
                    suppressHydrationWarning
                  >
                    Pesan Sekarang
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    onClick={() => document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })}
                    suppressHydrationWarning
                  >
                    Lihat Layanan
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
