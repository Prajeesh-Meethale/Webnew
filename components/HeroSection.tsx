import {
  ArrowRight,
  Check,
  Clock,
  Copy,
  Sparkle,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  User,
} from 'lucide-react'

const providers = [
  {
    rank: '1',
    name: 'Employers Council, Colorado',
    description: 'Trusted HR solutions and expert guidance for Colorado businesses.',
    logo: 'EC',
    logoClass: 'bg-white text-slate-900 border-white shadow-[0_0_24px_rgba(255,255,255,0.2)]',
    featured: true,
  },
  {
    rank: '2',
    name: 'Justworks',
    description: 'Comprehensive HR solutions with payroll, benefits, and compliance support.',
    logo: 'JW',
    logoClass: 'bg-emerald-500/15 text-emerald-200 border-emerald-300/25',
  },
  {
    rank: '3',
    name: 'TriNet',
    description: 'Full-service HR outsourcing with strong compliance and benefits administration.',
    logo: 'tri',
    logoClass: 'bg-blue-500/15 text-blue-100 border-blue-300/25',
  },
  {
    rank: '4',
    name: 'Paychex',
    description: 'Scalable HR services with payroll, benefits, and risk management.',
    logo: 'PX',
    logoClass: 'bg-orange-500/20 text-orange-100 border-orange-300/25',
  },
  {
    rank: '5',
    name: 'Insperity',
    description: 'HR outsourcing with a focus on performance and employee retention.',
    logo: 'IN',
    logoClass: 'bg-lime-500/15 text-lime-100 border-lime-300/25',
  },
]

export function HeroSection() {
  return (
    <section className="pt-32 pb-32 bg-[#0a0b10] overflow-hidden relative">
      {/* Intense Top Glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(123,92,255,0.25),transparent_70%)] -z-10" />
      <div className="absolute top-0 inset-x-0 h-[400px] bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(75,50,255,0.4),transparent_80%)] -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
              <p className="text-[11px] text-indigo-300 uppercase tracking-[0.25em] font-bold">
                AI VISIBILITY & ACQUISITION
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-[44px] leading-[1.05] md:text-[60px] font-bold text-white tracking-[-0.01em] heading-font">
                Turn AI into your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 drop-shadow-sm">
                  highest-converting acquisition channel.
                </span>
              </h1>
              <p className="text-[17px] md:text-[21px] text-[#A1A1AA] leading-[1.6] max-w-xl font-medium mt-2">
                Buyers are already asking AI who to hire. We don&apos;t just investigate why you aren&apos;t recommended—we engineer the exact signals ChatGPT, Claude, and Gemini need to confidently place you on every executive shortlist.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
                See Case Studies <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 glass hover:bg-white/[0.05] text-white font-semibold rounded-xl transition-colors inline-flex items-center justify-center">
                Get Free AI Strategy
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 pt-6 w-full">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5">
                  <Check className="w-3 h-3 text-[#A1A1AA]" />
                </div>
                <span className="text-[14px] font-medium text-[#A1A1AA]">No commitment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5">
                  <Clock className="w-3 h-3 text-[#A1A1AA]" />
                </div>
                <span className="text-[14px] font-medium text-[#A1A1AA]">Takes 2 minutes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5">
                  <Check className="w-3 h-3 text-[#A1A1AA]" />
                </div>
                <span className="text-[14px] font-medium text-[#A1A1AA]">Instant insights</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Answer Illustration */}
          <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(79,70,229,0.32),transparent_54%)] blur-2xl" />
            <div className="absolute -right-8 top-20 hidden h-40 w-40 rounded-full bg-purple-500/15 blur-3xl lg:block" />

            <div className="relative rounded-[1.75rem] border border-white/10 bg-[#0d111b]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <Sparkle className="h-4 w-4 fill-cyan-100 text-cyan-100" />
                  <span className="text-sm font-bold text-white">AI Assistant</span>
                </div>
                <div className="flex items-center gap-3 text-white/45">
                  <Copy className="h-4 w-4" />
                  <ThumbsUp className="h-4 w-4" />
                  <ThumbsDown className="h-4 w-4" />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-b-[1.75rem] p-5 sm:p-7">
                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="absolute bottom-0 left-8 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_0_24px_rgba(79,70,229,0.55)]">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-[15px] font-medium leading-relaxed text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                    Who are the best HR outsourcing providers for mid-sized businesses in Colorado?
                  </div>
                </div>

                <div className="relative z-10 mt-6 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-[0_0_28px_rgba(99,102,241,0.7)]">
                    <Sparkles className="h-5 w-5 fill-white text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] leading-relaxed text-white/75">
                      Here are some of the top HR outsourcing providers serving mid-sized businesses in Colorado:
                    </p>

                    <div className="relative mt-4 overflow-visible rounded-2xl border border-white/10 bg-black/10">
                      {providers.map((provider) => (
                        <div
                          key={provider.rank}
                          className={`relative flex items-center gap-3 px-3.5 py-3.5 ${
                            provider.featured
                              ? 'z-10 -mx-1 my-1 rounded-xl border border-violet-400/80 bg-violet-500/[0.09] shadow-[0_0_34px_rgba(124,58,237,0.35)]'
                              : 'border-b border-white/[0.06] last:border-b-0'
                          }`}
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                              provider.featured ? 'bg-violet-500/25 text-violet-100' : 'bg-white/[0.06] text-white/55'
                            }`}
                          >
                            {provider.rank}
                          </div>
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-[11px] font-black tracking-tight ${provider.logoClass}`}
                          >
                            {provider.logo}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`truncate text-[14px] font-bold ${
                                provider.featured ? 'text-violet-200' : 'text-white'
                              }`}
                            >
                              {provider.name}
                            </div>
                            <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-white/58">
                              {provider.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Annotation placed outside overflow-hidden */}
              <div className="pointer-events-none absolute -right-2 top-[38%] hidden items-center gap-4 xl:flex translate-x-full z-20">
                <svg width="76" height="46" viewBox="0 0 46 28" fill="none" aria-hidden="true" className="drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] mt-2">
                  <path
                    d="M44 4C32 7 18 13 4 22M4 22C8 17 9 14 9 10M4 22C10 22 14 23 18 26"
                    stroke="#a855f7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="-rotate-6 text-3xl leading-tight text-violet-300 [font-family:cursive] drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                  you are
                  <br />
                  here
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
