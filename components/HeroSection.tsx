import { Check, Clock, Zap, ArrowRight } from 'lucide-react'
import { InvestigationReportCard } from './InvestigationReportCard'

export function HeroSection() {
  return (
    <section className="pt-16 pb-24 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-10 max-w-xl">
            {/* Badge */}
            <div>
              <p className="text-[11px] text-[#8473FF] uppercase tracking-[0.2em] font-semibold">
                AI VISIBILITY INVESTIGATION & EXECUTION
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-[44px] leading-[1.1] md:text-[56px] font-bold text-white tracking-tight">
                Buyers are already asking AI who to hire. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B32FF] via-[#7B5CFF] to-[#A480FF]">
                  We investigate why your business isn&apos;t one of the answers.
                </span>
              </h1>
              <p className="text-[17px] text-white/60 leading-relaxed max-w-lg">
                We run buyer-intent prompts across leading AI systems, analyze what&apos;s recommended, and uncover the structural gaps
                keeping you off the shortlist.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(75,50,255,0.3)]">
                See Sample Investigation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-white font-semibold rounded-lg transition-colors border border-white/20">
                Get Free AI Audit
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20">
                  <Check className="w-3 h-3 text-white/60" />
                </div>
                <span className="text-[13px] text-white/60">No commitment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20">
                  <Clock className="w-3 h-3 text-white/60" />
                </div>
                <span className="text-[13px] text-white/60">Takes 2 minutes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20">
                  <Check className="w-3 h-3 text-white/60" />
                </div>
                <span className="text-[13px] text-white/60">Instant insights</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-[2.5rem] blur-3xl opacity-50 -z-10" />
            <InvestigationReportCard />
          </div>
        </div>
      </div>
    </section>
  )
}
