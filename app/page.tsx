import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ProcessFlow } from '@/components/ProcessFlow'
import { CaseStudies } from '@/components/CaseStudies'
import { ExecutiveProfiles } from '@/components/ExecutiveProfiles'
import { GlobalPresence } from '@/components/GlobalPresence'
import { TechStack } from '@/components/TechStack'
import { ApproachSection } from '@/components/ApproachSection'
import { FooterCTA } from '@/components/FooterCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProcessFlow />
        <CaseStudies />
        <ExecutiveProfiles />
        <GlobalPresence />
        <TechStack />
        <ApproachSection />
        <FooterCTA />
      </main>
    </div>
  )
}
