import { Check, Clock, Zap, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-32 pb-32 bg-[#0a0b10] overflow-hidden relative">
      {/* Intense Top Glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(123,92,255,0.25),transparent_70%)] -z-10" />
      <div className="absolute top-0 inset-x-0 h-[400px] bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(75,50,255,0.4),transparent_80%)] -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="space-y-8 max-w-4xl flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm mb-4">
            <p className="text-[11px] text-indigo-300 uppercase tracking-[0.25em] font-bold">
              AI VISIBILITY & ACQUISITION
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 flex flex-col items-center">
            <h1 className="text-[44px] leading-[1.05] md:text-[68px] font-bold text-white tracking-[-0.01em] heading-font">
              Turn AI from a black box into your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 drop-shadow-sm">
                highest-converting lead engine.
              </span>
            </h1>
            <p className="text-[17px] md:text-[21px] text-[#A1A1AA] leading-[1.6] max-w-2xl font-medium mt-2">
              Buyers are already asking AI who to hire. We don&apos;t just investigate why you aren&apos;t recommended—we engineer the exact signals ChatGPT, Claude, and Gemini need to confidently place you on every executive shortlist.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center w-full sm:w-auto">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
              See Case Studies <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass hover:bg-white/[0.05] text-white font-semibold rounded-xl transition-colors inline-flex items-center justify-center">
              Get Free AI Strategy
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-4 pt-8 border-t border-white/5 mt-8 w-full max-w-2xl">
            <div className="flex items-center justify-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5">
                <Check className="w-3 h-3 text-[#A1A1AA]" />
              </div>
              <span className="text-[14px] font-medium text-[#A1A1AA]">No commitment</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5">
                <Clock className="w-3 h-3 text-[#A1A1AA]" />
              </div>
              <span className="text-[14px] font-medium text-[#A1A1AA]">Takes 2 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5">
                <Check className="w-3 h-3 text-[#A1A1AA]" />
              </div>
              <span className="text-[14px] font-medium text-[#A1A1AA]">Instant insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
