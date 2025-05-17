import type { FC } from "react"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src="/images/logo.png" alt="Jangga Jasa Logo" width={150} height={150} className="h-auto" />
    </div>
  )
}
