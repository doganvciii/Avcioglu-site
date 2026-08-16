'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = { status: 'idle', message: '' }

const details = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+90 541 335 07 76',
    href: 'tel:+905413350776',
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@avcioglugroup.com',
    href: 'mailto:info@avcioglugroup.com',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Etiler Mah. 870 Sk. No: 6/5 Muratpaşa / Antalya',
    href: 'https://maps.google.com/?q=Etiler+Mah.+870+Sk.+No+6+Muratpaşa+Antalya',
  },
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60"
    >
      {pending ? 'Gönderiliyor...' : 'Mesaj Gönder'}
      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" />
              İletişim
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl">
              Bizimle İletişime Geçin
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Projelerimiz ve yatırım fırsatları hakkında bilgi almak için bize ulaşın.
              Ekibimiz size yardımcı olmaktan memnuniyet duyar.
            </p>

            <ul className="mt-10 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === 'Adres' ? '_blank' : undefined}
                    rel={label === 'Adres' ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border bg-card transition-colors group-hover:border-primary/50">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="mt-1 text-base text-foreground transition-colors group-hover:text-primary">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-border bg-card/50 p-6 sm:p-10">
            {state.status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                  Teşekkürler!
                </h3>
                <p className="mt-3 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                  {state.message}
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Ad Soyad" name="name" type="text" required placeholder="Adınız" />
                  <Field
                    label="Telefon"
                    name="phone"
                    type="tel"
                    placeholder="+90 5xx xxx xx xx"
                  />
                </div>
                <Field
                  label="E-posta"
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@email.com"
                />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Mesajınız <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Size nasıl yardımcı olabiliriz?"
                    className="resize-none rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {state.status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    {state.message}
                  </p>
                )}

                <SubmitButton />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string
  name: string
  type: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  )
}
