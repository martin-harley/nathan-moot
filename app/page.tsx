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
            radial-gradient(circle at 25% 25%, rgba(106,166,216,0.5), transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(133,11,23,0.4), transparent 55%),
            radial-gradient(circle at 50% 75%, rgba(20,33,57,0.5), transparent 60%),
            linear-gradient(180deg, #fcf2d9 0%, #ffffff 100%)
          `,
          backgroundColor: '#fcf2d9'
        }}
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 py-6 pointer-events-none">
        <Link href="/" className="pointer-events-auto pt-2">
          <img 
            src="/logo.png" 
            alt="Nathan Moot" 
            className="h-8 w-auto md:h-12" 
          />
        </Link>
        <button className="p-2 hover:opacity-70 transition-opacity pointer-events-auto" aria-label="Menu">
          <Plus className="w-6 h-6 text-foreground" strokeWidth={1.5} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
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
        <div className="px-6 md:px-12 pb-8">
          <Link 
            href="/all-work"
            className="flex items-center gap-2 text-xl md:text-2xl font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            All work <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
