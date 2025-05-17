"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 flex items-center gap-2 px-4 py-6 bg-green-500 hover:bg-green-600"
      onClick={() => window.open(`https://wa.me/6281234400591`, "_blank")}
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-medium">Hubungi Kami</span>
    </Button>
  )
}
