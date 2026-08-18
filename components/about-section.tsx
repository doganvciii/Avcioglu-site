import { Logo } from './logo'

const cards = [
  { title: 'İLK ÇİZGİDEN TESLİME', subtitle: 'Taslaktan Anahtar Teslime Tam Süreç' },
  { title: 'KÖKLÜ TİCARİ GEÇMİŞ', subtitle: 'Turizm & Mağazacılık Güvencesi' },
  { title: 'İMZALI MİMARİ', subtitle: 'Detaylarda Mimar Titizliği' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative border-y border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src="/images/about-architecture.png"
              alt="Avcıoğlu Group mimari detay, beton ve cam dokusu"
              className="w-full rounded-md object-cover"
            />
            <div className="absolute left-6 bottom-6 hidden lg:block">
              <Logo className="h-20 w-auto" />
            </div>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Hakkımızda
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Estetik ve Mühendisliği Bir Araya Getiriyoruz
            </h2>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Avcıoğlu Group; turizm ve mağazacılıkla Antalya’nın kalbinde başlayan köklü ticari
              yolculuğunu, bugün mimarlık ve inşaatın estetik vizyonuyla taçlandırıyor.
            </p>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Kalemimizin kâğıda ilk dokunduğu mimari taslaktan, kapıdaki anahtarın teslimine kadar
              tüm süreci kendi bünyemizde sanata dönüştürüyoruz. Mağazacılık geçmişimizden gelen
              sarsılmaz ticari disiplini mimar titizliğiyle buluşturuyor; kent dokusuna saygılı, zamana
              meydan okuyan ve değer kazanan imzalı yaşam alanları yükseltiyoruz.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cards.map((c) => (
                <div key={c.title} className="rounded-sm border border-border bg-card/50 p-4 text-center">
                  <h4 className="font-serif text-sm font-semibold text-foreground">{c.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground">{c.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
