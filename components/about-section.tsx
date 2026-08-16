const stats = [
  { value: 'Antalya', label: 'Merkez Ofis' },
  { value: 'Modern', label: 'Mimari Anlayış' },
  { value: 'Nitelikli', label: 'Yaşam Alanları' },
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
            <div className="absolute -bottom-6 -right-6 hidden rounded-md border border-primary/30 bg-background px-8 py-6 lg:block">
              <p className="font-serif text-3xl font-semibold text-primary">Avcıoğlu</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Group</p>
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
              Avcıoğlu Group olarak Antalya&apos;da; modern mimariyi, sağlam mühendisliği ve
              zamansız estetiği bir araya getiren projeler geliştiriyoruz. Her projemizde yaşam
              kalitesini, çevreye duyarlılığı ve detaylara verdiğimiz önemi ön planda tutuyoruz.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Amacımız yalnızca bina inşa etmek değil; insanların huzurla yaşayacağı, değer
              kazanan nitelikli yaşam alanları üretmektir.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-2xl font-semibold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
