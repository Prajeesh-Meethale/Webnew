import { Check, Clock, Zap, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-24 pb-32 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="space-y-10 max-w-4xl flex flex-col items-center">
          {/* Badge */}
          <div>
            <p className="text-[11px] text-[#8473FF] uppercase tracking-[0.2em] font-semibold">
              AI VISIBILITY INVESTIGATION & EXECUTION
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 flex flex-col items-center">
            <h1 className="text-[44px] leading-[1.1] md:text-[64px] font-bold text-white tracking-tight heading-font">
              Buyers are already asking AI who to hire. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B32FF] via-[#7B5CFF] to-[#A480FF]">
                We investigate why your business isn&apos;t one of the answers.
              </span>
            </h1>
            <p className="text-[17px] md:text-xl text-white/60 leading-relaxed max-w-2xl">
              We run buyer-intent prompts across leading AI systems, analyze what&apos;s recommended, and uncover the structural gaps
              keeping you off the shortlist.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(75,50,255,0.3)]">
              See Sample Investigation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-lg transition-colors border border-white/20">
              Get Free AI Audit
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
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
      </div>
    </section>
  )
}
