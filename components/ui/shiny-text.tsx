import type React from "react"
import { cn } from "@/lib/utils"

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export function ShinyText({ text, disabled = false, speed = 5, className }: ShinyTextProps) {
  return (
    <div
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "bg-gradient-to-r from-foreground/80 to-foreground/80",
        !disabled && "animate-shine",
        className,
      )}
      style={
        {
          backgroundImage: `linear-gradient(120deg, 
          var(--shine-start) 40%, 
          var(--shine-middle) 50%, 
          var(--shine-end) 60%
        )`,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: `${speed}s`,
          "--shine-start": "hsl(var(--foreground)/0.8)",
          "--shine-middle": "hsl(var(--foreground))",
          "--shine-end": "hsl(var(--foreground)/0.8)",
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  )
}
