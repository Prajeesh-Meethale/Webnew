import { Check, ArrowRight } from 'lucide-react'

export function InvestigationReportCard() {
  const companies = [
    { name: 'Alphainsights', rank: 1 },
    { name: 'FinVision', rank: 2 },
    { name: 'TechCorp', rank: 3 },
    { name: 'DataBloom', rank: 4 },
  ]

  const recommendations = [
    { label: 'Content depth', checked: true },
    { label: 'Third-party mentions', checked: true },
    { label: 'Case study evidence', checked: true },
    { label: 'Topical authority', checked: true },
  ]

  const competitors = [
    { name: 'Alphainsights', percentage: 38 },
    { name: 'FinVision', percentage: 27 },
    { name: 'DataBloom', percentage: 16 },
    { name: 'Quantix', percentage: 11 },
    { name: 'Others', percentage: 8 },
  ]

  return (
    <div className="bg-[#0b0c11] border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl flex flex-col md:flex-row gap-12 lg:gap-16">
      {/* Left Part: Investigation Details */}
      <div className="flex-1 space-y-8">
        {/* Header */}
        <div>
          <h3 className="text-[13px] text-white/60 mb-2 font-medium">Investigation Report</h3>
          <h2 className="text-[28px] font-semibold text-white leading-tight mb-1">TechCorp</h2>
          <p className="text-[13px] text-white/40">June 16, 2025</p>
        </div>

        {/* Intro text */}
        <div>
          <p className="text-white font-semibold text-[17px] mb-2">We asked AI about your business.</p>
          <p className="text-[12px] text-white/50 mb-1">Buyer question</p>
          <p className="text-[15px] font-semibold text-white">Who are the top companies for <br/> AI-powered financial analytics?</p>
        </div>

        {/* AI Response & Why others are recommended */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <p className="text-[13px] font-semibold text-white mb-1">AI Response (ChatGPT)</p>
              <p className="text-[13px] text-white/50 leading-snug">Here are the leading companies<br/>in AI-powered financial analytics:</p>
            </div>
            <div className="space-y-2.5">
              {companies.map((company) => (
                <div key={company.rank} className={`flex items-center gap-3 text-[13px] px-3 py-1.5 rounded-md ${company.rank === 3 ? 'bg-primary/20 text-white' : 'text-white/70'}`}>
                  <span className={company.rank === 3 ? 'text-[#8473FF] font-semibold' : 'text-white/40'}>{company.rank}.</span>
                  <span className={company.rank === 3 ? 'font-semibold' : ''}>{company.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-[13px] font-semibold text-white mb-1">Why others are recommended</p>
              <p className="text-[13px] text-white/50 leading-snug">AI systems cite stronger signals<br/>from competitors across:</p>
            </div>
            <div className="space-y-2.5 pt-1">
              {recommendations.map((rec, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13px]">
                  <div className="w-3.5 h-3.5 rounded-full border border-green-500/30 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-green-500 flex-shrink-0" />
                  </div>
                  <span className="text-white/70">{rec.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Finding */}
        <div className="bg-[#151525] border border-[#2d2a4a] rounded-xl p-5">
          <p className="text-[13px] text-[#8473FF] font-semibold mb-2">Key Finding</p>
          <p className="text-[14px] text-white/80 leading-relaxed">
            Your expertise is clear to humans, but AI lacks sufficient signals to confidently recommend you.
          </p>
        </div>
      </div>

      {/* Right Part: AI Visibility Score */}
      <div className="w-[240px] flex-shrink-0 flex flex-col justify-between">
        <div>
          <h3 className="text-[13px] font-semibold text-white mb-6">AI Visibility Score</h3>
          
          {/* Circular Score */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Background circle */}
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                {/* Progress circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="6"
                  strokeDasharray={`${(86 / 100) * 340} 340`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4B32FF" />
                    <stop offset="100%" stopColor="#A480FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-white tracking-tighter">86</div>
                <div className="text-[11px] font-medium text-white/40 mt-1">/100</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-[13px] font-semibold text-white px-4 py-1.5 bg-white/5 rounded-full">
                Strong Visibility
              </span>
            </div>
          </div>
        </div>

        {/* Competitors */}
        <div>
          <div className="text-[12px] text-white/50 mb-4 font-medium">Top Competitors Mentioned</div>
          <div className="space-y-3.5 mb-8">
            {competitors.map((competitor) => (
              <div key={competitor.name} className="flex items-center justify-between text-[13px]">
                <span className="text-white/70">{competitor.name}</span>
                <span className="text-white font-medium">{competitor.percentage}%</span>
              </div>
            ))}
          </div>

          <button className="text-[13px] text-[#8473FF] hover:text-[#9b8dff] transition-colors flex items-center gap-1.5 font-medium">
            See all citations <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
