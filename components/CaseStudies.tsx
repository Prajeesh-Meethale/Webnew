import Link from 'next/link'
import { ArrowRight, Hexagon, Circle, Square, Triangle } from 'lucide-react'

export function CaseStudies() {
  const cases = [
    {
      name: 'Carbon Jar',
      location: 'Tunisia • Climate Tech',
      flag: '🇹🇳',
      icon: <Circle className="w-4 h-4 text-gray-400" />,
      quote: '"AI helped us show up for the right buyers at the right moment."',
      stat: '+26',
      statColor: 'text-emerald-500',
      description: 'buyer prompts where recommended',
      url: '#',
    },
    {
      name: 'AgileCatalyst',
      location: 'Austin, Texas • Consulting',
      flag: '🇺🇸',
      icon: <Hexagon className="w-4 h-4 text-gray-400" />,
      quote: '"It\'s not about ranking higher. It\'s about being understood."',
      stat: '3x',
      statColor: 'text-purple-500',
      description: 'increase in AI recommendations',
      url: '#',
    },
    {
      name: 'Employers Council',
      location: 'Colorado, USA • Employment Law',
      flag: '🇺🇸',
      icon: <Square className="w-4 h-4 text-gray-400" />,
      quote: '"From 0 to recommended in 41% of prompts within 30 days."',
      stat: '+41%',
      statColor: 'text-teal-400',
      description: 'increase in citation rate across AI systems',
      url: '#',
    },
    {
      name: 'DeusAds',
      location: 'Netherlands • AdTech / Gaming',
      flag: '🇳🇱',
      icon: <Triangle className="w-4 h-4 text-gray-400" />,
      quote: '"AI systems now recommend our clients before they ever reach out."',
      stat: 'From 0 → 4',
      statColor: 'text-orange-500',
      description: 'AI systems now recommend DeusAds for key queries',
      url: '#',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-sm text-indigo-500 font-semibold tracking-[0.2em] mb-4 uppercase">
                Trusted by leaders across industries & borders
              </p>
              <h2 className="text-2xl font-bold text-white heading-font">Organizations</h2>
            </div>
            <Link href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1 transition-colors">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((caseItem) => (
            <div key={caseItem.name} className="bg-[#12131A] border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors shadow-lg min-h-[320px]">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {caseItem.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white text-base">{caseItem.name}</h3>
                      <span className="text-sm">{caseItem.flag}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{caseItem.location}</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">
                {caseItem.quote}
              </p>

              {/* Stat */}
              <div className="mb-6">
                <p className={`text-3xl font-medium mb-2 ${caseItem.statColor}`}>{caseItem.stat}</p>
                <p className="text-sm text-gray-400 leading-snug">{caseItem.description}</p>
              </div>

              {/* Link */}
              <Link href={caseItem.url} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                Read case study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
