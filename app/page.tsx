import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
