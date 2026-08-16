import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="/images/hero-architecture.png"
        alt="Avcıoğlu Group modern mimari konut projesi, gün batımında"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Antalya
          </p>
          <h1 className="text-balance font-serif text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Her Proje Bir Fidan, Her Temel Bir Gelecek.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Antalya&apos;da modern mimari, estetik ve mühendisliği buluşturan nitelikli yaşam
            alanları.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90"
            >
              Projelerimizi İnceleyin
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm border border-border px-8 py-4 text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Keşfedin</span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
