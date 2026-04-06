import { ArrowRight, ArrowDown, Plus } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(200, 255, 255, 0.4) 0%, 
              rgba(255, 255, 255, 0.3) 30%,
              rgba(255, 220, 240, 0.3) 70%,
              rgba(255, 240, 220, 0.3) 100%
            ),
            radial-gradient(ellipse at 20% 80%, rgba(255, 200, 220, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 90%, rgba(255, 250, 220, 0.5) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 0%, rgba(180, 240, 255, 0.5) 0%, transparent 50%)
          `,
          backgroundColor: '#f0fdff'
        }}
      />

      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/" className="text-3xl font-bold text-foreground" style={{ fontFamily: 'cursive' }}>
          nm
        </Link>
        <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Menu">
          <Plus className="w-6 h-6 text-foreground" strokeWidth={1.5} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 pb-40">
        {/* Hero Text */}
        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] text-center max-w-4xl leading-tight md:leading-tight lg:leading-tight text-foreground">
          <span className="font-normal">Aligning </span>
          <span className="font-bold" style={{ color: '#001a4d' }}>appearance</span>
          <span className="font-normal"> with </span>
          <span className="font-bold" style={{ color: '#8b0000' }}>personality</span>
          <span className="font-normal">.</span>
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 md:mt-16">
          <Link 
            href="/mission" 
            className="flex items-center gap-2 text-base md:text-lg text-foreground hover:opacity-70 transition-opacity"
          >
            Mission <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/me" 
            className="flex items-center gap-2 text-base md:text-lg text-foreground hover:opacity-70 transition-opacity"
          >
            Me <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/schedule" 
            className="flex items-center gap-2 text-base md:text-lg text-foreground hover:opacity-70 transition-opacity"
          >
            Schedule <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </main>

      {/* Bottom Section */}
      <section className="absolute bottom-0 left-0 right-0 flex items-end justify-between">
        {/* Services */}
        <div className="px-6 md:px-12 pb-8">
          <button className="flex items-center gap-2 text-xl md:text-2xl font-medium text-foreground hover:opacity-70 transition-opacity">
            Services <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* All Work Button */}
        <Link 
          href="/all-work"
          className="flex items-center gap-2 px-12 md:px-20 py-6 md:py-8 text-lg md:text-xl text-foreground hover:opacity-80 transition-opacity"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 240, 0.9) 0%, rgba(255, 250, 230, 0.95) 100%)'
          }}
        >
          All work <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}
