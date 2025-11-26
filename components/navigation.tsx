"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Design & Architecture", href: "/design" },
  { name: "UI Showcase", href: "/ui-showcase" },
  { name: "Demo", href: "/demo" },
  { name: "Reflections", href: "/reflections" },
  { name: "Team", href: "/team" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 pl-4 md:pl-6">
          <span className="text-xl md:text-2xl font-bold">SpendWise</span>
        </Link>
        
        <div className="hidden md:flex md:gap-2 pr-4 md:pr-6">
          {navigation.map((item) => (
            <Button
              key={item.name}
              asChild
              variant={pathname === item.href ? "default" : "ghost"}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile menu button - simplified for now */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  )
}
