"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ArrowDown, Plus } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Style Therapy",
    description: "What are your style, wardrobe and overall goals? Answer a set of questions for tailored solutions to your personal needs via call, message, or completing your Profile. After each session, you will receive a personalized guide that connects your personality and appearance.",
    tags: ["Strategy", "Visual Identity", "Tone of Voice"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&fit=crop&q=80",
    link: "/mission"
  },
  {
    title: "Shopping",
    description: "Let me do the work for you! Receive personally sourced pieces, handpicked for your lifestyle. Your newest productivity hack!",
    tags: ["UI/UX Design", "Development", "Motion"],
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&fit=crop&q=80",
    link: "/mission",
    bgColor: "#850b17",
    textColor: "#6aa6d8"
  },
]

function CaseStudyFrame({ title, description, image, link, reverse = false, index = 0, textColor }: any) {
  const radialX = index % 2 === 0 ? '25%' : '75%'
  const text = textColor ?? '#850b17'
  const textMuted = textColor
    ? `${textColor}cc`
    : 'rgba(133,11,23,0.82)'
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 relative"
      style={{
        background: `radial-gradient(ellipse at ${radialX} 50%, rgba(255,255,255,0.08) 0%, transparent 55%)`
      }}
    >
      <div className={cn(
        "max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-24",
        reverse && "md:flex-row-reverse"
      )}>
        {/* Text Content */}
        <div className="flex-1 space-y-6 md:space-y-8" style={{ color: text }}>
          <div className="space-y-2">
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight">
               {title}
             </h2>
          </div>

          <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: textMuted }}>
            {description}
          </p>

          <Link
            href={link}
            className="inline-flex items-center gap-2 text-lg md:text-xl font-medium hover:opacity-70 transition-all group"
            style={{ color: text }}
          >
            Explore <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Image / Visual */}
        <div className="flex-1 w-full relative group">
          <div className="aspect-[16/9] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl saturate-110 brightness-105 transition-transform duration-700 group-hover:scale-[1.02]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          {/* Decorative glass elements */}
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 md:w-48 h-32 md:h-48 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full -z-10 animate-pulse" />
          <div className="absolute -top-10 -left-10 w-24 h-24 backdrop-blur-3xl rounded-full -z-10" style={{ background: 'rgba(133,11,23,0.07)' }} />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as percentage of window
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative isolate">
      {/* Gradient Background */}
      <div 
        className="fixed inset-0 -z-10 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${25 + (mousePosition.x - 50) * 0.2}vw ${25 + (mousePosition.y - 50) * 0.2}vh, rgba(106,166,216,0.7) 0%, rgba(106,166,216,0) 70%),
            radial-gradient(circle at ${75 + (mousePosition.x - 50) * -0.1}vw ${35 + (mousePosition.y - 50) * -0.1}vh, rgba(133,11,23,0.5) 0%, rgba(133,11,23,0) 75%),
            radial-gradient(circle at ${50 + (mousePosition.x - 50) * 0.1}vw ${75 + (mousePosition.y - 50) * 0.1}vh, rgba(20,33,57,0.7) 0%, rgba(20,33,57,0) 80%),
            linear-gradient(180deg, #fcf2d9 0%, #ffffff 100%)
          `,
          width: '100%',
          height: '100%'
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

      <main className="relative flex flex-col items-center justify-center min-h-screen px-6">
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
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Bottom Section (pushed up on scroll) */}
        <section className="absolute bottom-0 left-0 right-0 flex items-end justify-between pointer-events-none z-20">
          <div className="px-6 md:px-12 pb-8 pointer-events-auto">
            <button 
              className={cn(
                "flex flex-col items-start text-left group transition-all duration-500",
                isOpen && "opacity-0 translate-y-4 pointer-events-none"
              )}
              onClick={() => {
                const servicesEl = document.getElementById('services-start');
                if (servicesEl) {
                  window.scrollTo({ top: servicesEl.offsetTop, behavior: 'smooth' });
                }
              }}
            >
              <span className="text-base md:text-lg text-muted-foreground mb-1">Explore</span>
              <div className="flex items-center gap-4 text-2xl md:text-4xl font-normal text-foreground group-hover:opacity-70 transition-opacity">
                Services <ArrowDown className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </button>
          </div>
        </section>
      </main>

      {/* Service Frames */}
      {/* Single gradient covers all service frames so transitions are seamless */}
      <div
        id="services-start"
        className="relative z-10 pb-32"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #6aa6d8 10%, #6aa6d8 42%, #850b17 58%, #850b17 100%)'
        }}
      >
        {services.map((service, index) => (
          <CaseStudyFrame
            key={service.title}
            {...service}
            index={index}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  )
}

