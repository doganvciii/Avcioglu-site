import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from './logo'

const nav = [
  { label: 'Ana Sayfa', href: '#home' },
  { label: 'Projeler', href: '#projects' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'İletişim', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Antalya&apos;da modern mimari, estetik ve mühendisliği buluşturan nitelikli yaşam
              alanları inşa ediyoruz.
            </p>
          </div>

          <nav aria-label="Alt menü">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Menü
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              İletişim
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+905413350776"
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +90 541 335 07 76
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@avcioglugroup.com"
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  info@avcioglugroup.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-pretty">
                  Etiler Mah. 870 Sk. No: 6/5 Muratpaşa / Antalya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Avcıoğlu Group. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-muted-foreground">Antalya, Türkiye</p>
        </div>
      </div>
    </footer>
  )
}
