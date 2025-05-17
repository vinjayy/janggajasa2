"use client"

import { useEffect, useState } from "react"
import { Logo } from "./logo"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center mb-6">
          <Logo className="scale-150" />
        </div>
        <div className="loading-bar">
          <div className="loading-bar-progress"></div>
        </div>
      </div>
      <p className="text-blue-600 mt-4 font-medium animate-pulse">Memuat Layanan Terbaik...</p>
    </div>
  )
}
