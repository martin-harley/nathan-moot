"use client"

import { useState } from "react"
import { ArrowRight, ArrowDown, Plus } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(106,166,216,0.5), transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(133,11,23,0.4), transparent 55%),
            radial-gradient(circle at 50% 75%, rgba(20,33,57,0.5), transparent 60%),
            linear-gradient(180deg, #fcf2d9 0%, #ffffff 100%)
          `,
          backgroundColor: '#fcf2d9'
        }}
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 pointer-events-none">
        <Link href="/" className="pointer-events-auto pt-2">
          <img 
            src="/logo.png" 
            alt="Nathan Moot" 
            className="h-8 w-auto md:h-12" 
          />
        </Link>
        <div className="relative pointer-events-auto flex flex-col items-center">
          <button 
            className="p-2 transition-all duration-300 cursor-pointer" 
            aria-label="Menu"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Plus 
              className={cn(
                "w-6 h-6 text-foreground transition-all duration-300 ease-out transform-gpu",
                isOpen && "rotate-45"
              )} 
              strokeWidth={isHovered ? 3 : 1.5} 
            />
          </button>

          {/* Glassmorphic Dropdown */}
          <div 
            className={cn(
              "absolute top-[calc(100%+1rem)] right-0 min-w-[200px] overflow-hidden transition-all duration-500 ease-out origin-top",
              "bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl z-40",
              isOpen ? "max-h-[1000px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
            )}
          >
            <nav className="flex flex-col p-6 gap-2">
              {['Services', 'Contact', 'About', 'FAQ'].map((item, index) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group flex items-center justify-between px-4 py-3 text-lg font-medium text-foreground hover:bg-white/20 rounded-2xl transition-all duration-300"
                  style={{ 
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
        {/* Hero Text */}
        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] text-center max-w-4xl leading-tight md:leading-tight lg:leading-tight text-foreground">
          <span className="font-normal">Aligning </span>
          <span className="font-bold" style={{ color: '#142139' }}>appearance</span>
          <span className="font-normal"> with </span>
          <span className="font-bold" style={{ color: '#850b17' }}>personality</span>
          <span className="font-normal">.</span>
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 md:mt-16">
          <Link 
            href="/mission" 
            className="flex items-center gap-2 text-base md:text-lg font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            Mission <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/me" 
            className="flex items-center gap-2 text-base md:text-lg font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            Me <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/schedule" 
            className="flex items-center gap-2 text-base md:text-lg font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            Schedule <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </main>

      {/* Bottom Section */}
      <section className="absolute bottom-0 left-0 right-0 flex items-end justify-between">
        {/* Services */}
        <div className="px-6 md:px-12 pb-8">
          <button className="flex flex-col items-start text-left group">
            <span className="text-base md:text-lg text-muted-foreground mb-1">Explore</span>
            <div className="flex items-center gap-4 text-3xl md:text-5xl font-normal text-foreground group-hover:opacity-70 transition-opacity">
              Services <ArrowDown className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </section>
    </div>
  )
}

