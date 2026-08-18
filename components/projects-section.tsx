'use client'

import { useState, useCallback, useEffect } from 'react'
import { Trees, ToyBrick, CarFront, Building2, Waves, Sparkles, ShieldCheck, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react'

type Feature = { icon: typeof Trees; label: string }
type Project = {
  id: string
  name: string
  status: string
  description: string
  features: Feature[]
  gallery: { src: string; alt: string }[]
}

const projects: Project[] = [
  {
    id: 'zenit',
    name: 'Zenit',
    status: 'Satışta',
    description:
      'Modern mimari çizgileri, ferah yaşam alanları, peyzajı ve sosyal alanlarıyla ayrıcalıklı bir konut projesi.',
    features: [
      { icon: Trees, label: 'Peyzaj ve Yeşil Alan' },
      { icon: ToyBrick, label: 'Çocuk Oyun Parkı' },
      { icon: CarFront, label: 'Açık Otopark' },
      { icon: Building2, label: 'Modern Mimari' },
    ],
    gallery: [
      { src: '/images/zenit/zenit-1.jpg', alt: 'Zenit projesi gündüz cephe görünümü ve peyzaj' },
      { src: '/images/zenit/zenit-5.jpg', alt: 'Zenit projesi alacakaranlıkta cephe görünümü, sıcak iç aydınlatma' },
      { src: '/images/zenit/zenit-4.jpg', alt: 'Zenit projesi köşe görünümü ve sokak peyzajı' },
      { src: '/images/zenit/zenit-3.jpg', alt: 'Zenit projesi giriş cephesi yakın çekim' },
      { src: '/images/zenit/zenit-6.jpg', alt: 'Zenit projesi akşam giriş kapısı ve aydınlatmalı logo' },
      { src: '/images/zenit/zenit-2.jpg', alt: 'Zenit projesi giriş kapısı ve çevre düzenlemesi' },
      { src: '/images/zenit/zenit-7.jpg', alt: 'Zenit projesi çocuk oyun parkı ve sosyal alanlar' },
      { src: '/images/zenit/zenit-8.jpg', alt: 'Zenit projesi havadan yerleşim planı, otopark ve peyzaj' },
    ],
  },
  {
    id: 'coastline',
    name: 'Coastline',
    status: 'Satışta',
    description:
      'Zarif koyu cephesi, altın aksan aydınlatması ve şık köşe balkonlarıyla şehrin merkezinde sahil hattına yürüme mesafesinde prestijli bir yaşam sunan seçkin bir konut projesi.',
    features: [
      { icon: Sparkles, label: 'Özel Cephe Aydınlatması' },
      { icon: Building2, label: 'Modern Mimari' },
      { icon: ShieldCheck, label: 'Güvenlikli Giriş' },
      { icon: Waves, label: 'Merkezi Konum' },
    ],
    gallery: [
      { src: '/images/coastline/coastline-2.jpg', alt: 'Coastline projesi gündüz köşe cephe görünümü ve peyzaj' },
      { src: '/images/coastline/coastline-1.jpg', alt: 'Coastline projesi alacakaranlıkta köşe cephe görünümü, sıcak LED aydınlatma' },
      { src: '/images/coastline/coastline-3.jpg', alt: 'Coastline projesi giriş kapısı ve aydınlatmalı Avcıoğlu logosu' },
    ],
  },
  {
    id: 'mirada',
    name: 'Mirada',
    status: 'Satışta',
    description:
      'Mazıdağı’nda yer alan Mirada, doğal çevreyle uyumlu, huzurlu ve modern yaşam alanları sunan, sosyal yaşamı öne çıkaran bir konut ekosistemidir.',
    features: [
      { icon: Trees, label: 'Doğayla Uyumlu Peyzaj' },
      { icon: Building2, label: 'Modern Mimari Dil' },
      { icon: CarFront, label: 'Geniş Otopark Alanı' },
      { icon: ShieldCheck, label: 'Güvenli ve Konforlu Yaşam' },
    ],
    gallery: [
      { src: '/images/mirada/1.jpg', alt: 'Mirada projesi cephe görünümü ve giriş tasarımı' },
      { src: '/images/mirada/2.jpg', alt: 'Mirada projesi cephenin yan görünümü ve peyzaj' },
      { src: '/images/mirada/3.jpg', alt: 'Mirada projesi akşam cephe ışıklandırması ve modern mimari' },
      { src: '/images/mirada/4.jpg', alt: 'Mirada projesi havuz ve bahçe yaşam alanı' },
    ],
  },
  {
    id: 'verda',
    name: 'Verda',
    status: 'Planlanan',
    description:
      'Antalya / Döşemealtı konumunda yer alan Verda, modern konut projesi; geniş balkonlar ve kaliteli dış cephe detayları sunar.',
    features: [
      { icon: Sparkles, label: 'Dış Cephe Gizli LED Aydınlatma' },
      { icon: Building2, label: 'Ahşap Kompozit Detaylar' },
      { icon: CarFront, label: 'Geniş Balkonlu Lüks Daireler' },
    ],
    gallery: [
      { src: '/1 kopya.jpg', alt: 'Verda projesi cephe ve balkonlar' },
      { src: '/2 kopya.jpg', alt: 'Verda projesi akşam cephe aydınlatması' },
    ],
  },
  {
    id: 'solis',
    name: 'Solis',
    status: 'Satışta',
    description:
      'Antalya / Kepez (Çamlıbel) konumunda yer alan Solis, butik konut projesi; modern dış cephe ve gelişmiş güvenlik/konfor özellikleri sunar.',
    features: [
      { icon: Building2, label: 'Modern Dış Cephe Mimarisi' },
      { icon: Sparkles, label: 'Dikey Dış Cephe LED Aydınlatma' },
      { icon: Waves, label: 'Lüks Cam Balkon Korkulukları' },
      { icon: ShieldCheck, label: 'Asansör & Şifreli Giriş Sistemi' },
      { icon: ToyBrick, label: 'Otomatik Panjur' },
      { icon: ShieldCheck, label: 'Görüntülü Diyafon & Güvenlik Kamerası' },
    ],
    gallery: [
      { src: '/solis-1.jpg', alt: 'Solis projesi cephe ve balkonlar' },
      { src: '/solis-2.jpg', alt: 'Solis projesi gündüz cephe görünümü ve led detaylar' },
    ],
  },
  {
    id: 'life',
    name: 'Life',
    status: '',
    description:
      'Antalya / Kepez konumunda yer alan Life, tamamlanmış bir konut projesidir. Koyu ahşap ve antrasit cephe detayları ile modern bir tasarım sunar.',
    features: [
      { icon: ToyBrick, label: 'Koyu Ahşap Panel & Antrasit Mimari Cephe' },
      { icon: Building2, label: 'Dikey Çıta Detaylı Özel Cephe Tasarımı' },
      { icon: Waves, label: 'Fransız Balkon & Siyah Alüminyum Korkuluklar' },
      { icon: ShieldCheck, label: 'Asansör & Şifreli Bina Giriş Güvenliği' },
      { icon: Sparkles, label: 'Otomatik Panjur & Ankastre Mutfak Seti' },
      { icon: ShieldCheck, label: 'Görüntülü Diyafon & Kamera Güvenlik Sistemi' },
    ],
    gallery: [
      { src: '/life-1.jpg', alt: 'Life projesi cephe ön görünüm' },
      { src: '/life-2.jpg', alt: 'Life projesi açıdan cephe ve balkonlar' },
    ],
  },
  {
    id: 'vesta',
    name: 'Vesta',
    status: 'Satışta',
    description:
      'Antalya / Kepez konumunda yer alan Vesta, modern ahşap ve antrasit mimari cepheye sahip konut projesidir.',
    features: [
      { icon: Building2, label: 'Modern Ahşap & Antrasit Mimari Cephe' },
      { icon: Sparkles, label: 'Özel Dikey Çıta & Gizli LED Aydınlatma Detayları' },
      { icon: Waves, label: 'Geniş Balkonlar & Siyah Alüminyum Korkuluk Sistemleri' },
      { icon: CarFront, label: 'Açık Otopark Area & Özel Çevre Düzenlemesi' },
    ],
    gallery: [
      { src: '/vesta-1.jpg', alt: 'Vesta projesi cephe ve balkonlar' },
      { src: '/vesta-2.jpg', alt: 'Vesta projesi gündüz cephe görünümü' },
    ],
  },
  {
    id: 'corner-apartments',
    name: 'Corner Apartments',
    status: 'Satışta',
    description:
      'Modern mimari çizgileri, ticari alttabanı ve estetik dış cephe kaplamasıyla Kepez\'e değer katan imzalı proje.',
    features: [
      { icon: CarFront, label: 'Zemin katta geniş vitrinli ticari dükkan/mağaza alanları' },
      { icon: Building2, label: 'Antrasit ve ahşap dokulu modern kompozit cephe' },
      { icon: Waves, label: 'Geniş balkon kullanımı ve mimari detaylarda fonksiyonellik' },
    ],
    gallery: [
      { src: '/images/corner/corner-1.jpg', alt: 'Corner Apartments cephe ve ticari zemin görünümü' },
      { src: '/images/corner/corner-2.jpg', alt: 'Corner Apartments balkondan görünüm ve cephe detayları' },
    ],
  },
]

export function ProjectsSection() {
  const [tab, setTab] = useState(0)
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const project = projects[tab]
  const gallery = project.gallery

  const next = useCallback(() => setActive((i) => (i + 1) % gallery.length), [gallery.length])
  const prev = useCallback(() => setActive((i) => (i - 1 + gallery.length) % gallery.length), [gallery.length])

  const selectTab = (i: number) => {
    setTab(i)
    setActive(0)
  }

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, next, prev])

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Projelerimiz
            </p>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Yaşam kalitesini yükselten, çevresiyle uyumlu ve zamansız tasarımlar geliştiriyoruz.
          </p>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Projeler" className="mt-12 flex flex-wrap gap-2 border-b border-border">
          {projects.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              type="button"
              id={`tab-${p.id}`}
              aria-selected={i === tab}
              aria-controls={`panel-${p.id}`}
              onClick={() => selectTab(i)}
              className={`relative -mb-px px-5 py-3 font-serif text-2xl font-semibold transition-colors sm:text-3xl ${
                i === tab ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.name}
              {i === tab && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>

        <article
          role="tabpanel"
          id={`panel-${project.id}`}
          aria-labelledby={`tab-${project.id}`}
          className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-md"
              aria-label="Görseli büyüt"
            >
              <img
                src={gallery[active].src || "/placeholder.svg"}
                alt={gallery[active].alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              {project.status && (
                <span className="absolute left-6 top-6 rounded-sm bg-background/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary backdrop-blur">
                  {project.status}
                </span>
              )}
            </button>

            <div className="grid grid-cols-4 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Görsel ${i + 1}`}
                  aria-current={i === active}
                  className={`relative aspect-square overflow-hidden rounded-sm transition-all ${
                    i === active
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.src || "/placeholder.svg"} alt={img.alt} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">{project.name}</h3>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.features.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-sm border border-border bg-card/50 px-4 py-3.5 transition-colors hover:border-primary/50"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">{label}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold tracking-wide text-primary"
            >
              Proje hakkında bilgi alın
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </article>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} galeri görüntüleyici`}
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:text-primary"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:text-primary sm:left-8"
            aria-label="Önceki görsel"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src || "/placeholder.svg"}
              alt={gallery[active].alt}
              className="max-h-[80vh] w-full rounded-md object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {active + 1} / {gallery.length} — {gallery[active].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:text-primary sm:right-8"
            aria-label="Sonraki görsel"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
