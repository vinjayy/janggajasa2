"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { services } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<typeof services>([])
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = services.filter(
        (service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setSearchResults(results)
      setIsSearching(true)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [searchTerm])

  const handleServiceClick = (serviceId: string) => {
    setSearchTerm("")
    setIsSearching(false)
    document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })
    // Ideally, we would filter to show only this service
    // For now, we'll just scroll to the services section
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Cari layanan..."
          className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          suppressHydrationWarning
        />
        {searchTerm && (
          <Button
            variant="ghost"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 rounded-full text-gray-400 hover:text-gray-600"
            onClick={() => setSearchTerm("")}
          >
            &times;
          </Button>
        )}
      </div>

      {isSearching && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          {searchResults.length > 0 ? (
            <ul className="py-1">
              {searchResults.map((service) => (
                <li key={service.id}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-sm text-gray-500 truncate">{service.description}</div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">Tidak ada hasil yang ditemukan</div>
          )}
        </div>
      )}
    </div>
  )
}
