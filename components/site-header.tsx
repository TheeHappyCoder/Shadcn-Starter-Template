"use client"

import Link from "next/link"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommandDialog, CommandInput } from "@/components/ui/command"
import { Search } from "lucide-react"

export function SiteHeader() {
  const [isCommandOpen, setIsCommandOpen] = useState(false)

  const toggleCommand = () => setIsCommandOpen((prev) => !prev)

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between space-x-4">

        {/* Left Side: Logo and Navigation */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold">
            Template
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-base hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-base hover:underline">
              About
            </Link>
          </nav>
        </div>

        {/* Right Side: Social Icons, Search, and Theme Toggle */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <button
              onClick={toggleCommand}
              className={buttonVariants({ size: "icon", variant: "ghost" })}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link href="#" target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({ size: "icon", variant: "ghost" })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="#" target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({ size: "icon", variant: "ghost" })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>

      {/* Command Dialog */}
      <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
        <CommandInput placeholder="Type a command..." />
      </CommandDialog>
    </header>
  )
}
