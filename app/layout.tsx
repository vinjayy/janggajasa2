import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingScreen } from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Janggajasa - Penyedia Layanan Jasa Terpercaya",
  description:
    "Janggajasa menyediakan berbagai layanan profesional untuk membantu menyelesaikan kebutuhan rumah tangga, pendidikan, dan bisnis Anda dengan kualitas terbaik.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
