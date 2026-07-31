import Link from 'next/link'
import { ArrowRight, Hexagon, Circle, Square, Triangle } from 'lucide-react'

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export function CaseStudies() {
  const cases = [
    {
      name: 'Carbon Jar',
      heading: 'Scaling presence in Climate Tech AI tools',
      location: 'Tunisia',
      industry: 'Climate Tech',
      flagImage: '/Flag_of_Tunisia.svg',
      icon: <img src="/carbon_jar_logo.svg" alt="Carbon Jar Logo" className="w-6 h-6 object-contain" />,
      quote: '"AI helped us show up for the right buyers at the right moment."',
      author: {
        name: 'Oussama Ben Abdessalem',
        title: 'CEO & Co-founder',
        image: '/1761748492209.svg',
        linkedin: 'https://www.linkedin.com/in/oub/'
      },
      stat: '+26',
      statColor: 'text-emerald-400',
      glowClass: 'bg-emerald-500/10',
      description: 'buyer prompts where recommended',
      url: '/case-studies/carbon-jar',
    },
    {
      name: 'AgileCatalyst',
      heading: 'Dominating B2B consulting queries',
      location: 'Austin, Texas',
      industry: 'Consulting',
      flagImage: '/Flag_of_the_United_States.svg',
      icon: <img src="/Agile catalyst.png" alt="AgileCatalyst Logo" className="w-7 h-7 object-contain" />,
      quote: '"It\'s not about ranking higher. It\'s about being understood."',
      author: {
        name: 'Arjun Thakur, PMP',
        title: 'Project Leader & Founder',
        image: '/Arjun.jfif',
        linkedin: 'https://www.linkedin.com/in/arjunthak/'
      },
      stat: '3x',
      statColor: 'text-purple-400',
      glowClass: 'bg-purple-500/10',
      description: 'increase in AI recommendations',
      url: '/case-studies/agile-catalyst',
    },
    {
      name: 'Employers Council',
      heading: 'Becoming the authority in Employment Law',
      location: 'Denver, Colorado, USA',
      industry: 'Employment Law',
      flagImage: '/Flag_of_the_United_States.svg',
      icon: <img src="/Employers council logo.png" alt="Employers Council Logo" className="w-7 h-7 object-contain" />,
      quote: '"From 0 to recommended in 41% of prompts within 30 days."',
      author: {
        name: 'Ken Rouse',
        title: 'Marketing Manager',
        image: '/Ken.jfif',
        linkedin: 'https://www.linkedin.com/in/ken-rouse/'
      },
      stat: '+41%',
      statColor: 'text-teal-400',
      glowClass: 'bg-teal-500/10',
      description: 'increase in citation rate across AI',
      url: '#',
    },
    {
      name: 'DeusAds',
      heading: 'Pre-empting outreach in AdTech',
      location: 'Rotterdam, Netherlands',
      industry: 'AdTech',
      flagImage: '/Flag_of_the_Netherlands.svg',
      icon: <img src="/deusads.svg" alt="DeusAds Logo" className="w-7 h-7 object-contain" />,
      quote: '"AI systems now recommend our clients before they ever reach out."',
      author: {
        name: 'Kristina Zukurova',
        title: 'Tech Recruiter',
        image: '/Kristina.jfif',
        linkedin: 'https://www.linkedin.com/in/kristina-zukurova/'
      },
      stat: '4x',
      statColor: 'text-orange-400',
      glowClass: 'bg-orange-500/10',
      description: 'AI systems recommending DeusAds',
      url: '#',
    },
  ]

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-sm text-indigo-500 font-semibold tracking-[0.2em] mb-4 uppercase">
                Proven Global Impact
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white heading-font">
                Measurable outcomes<br />
                across multiple markets.
              </h2>
            </div>
            <Link href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1 transition-colors pb-2">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Case Study Cards - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((caseItem) => (
            <div key={caseItem.name} className="bg-[#12131A] rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col group relative overflow-hidden shadow-2xl">
              
              {/* Subtle background glow that activates on hover */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${caseItem.glowClass} blur-[80px] -mr-20 -mt-20 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100`}></div>

              {/* Top: Logo and Location Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    {caseItem.icon}
                  </div>
                  <span className="font-semibold text-gray-200">{caseItem.name}</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                  {caseItem.flagImage ? (
                    <img src={caseItem.flagImage} alt="Flag" className="w-4 h-4 rounded-sm object-cover" />
                  ) : (
                    <span className="text-lg leading-none">{caseItem.flag}</span>
                  )}
                  <span className="text-xs font-medium text-gray-400 tracking-wide">{caseItem.location} • {caseItem.industry}</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-medium text-white mb-6 pr-8 leading-tight">
                  {caseItem.heading}
                </h3>
                
                <blockquote className="text-gray-400/90 text-sm lg:text-base leading-relaxed mb-6 border-l-2 border-indigo-500/30 pl-5">
                  {caseItem.quote}
                </blockquote>

                {caseItem.author && (
                  <div className="flex items-center gap-4 mb-8 pl-5">
                    <img src={caseItem.author.image} alt={caseItem.author.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-base">
                          {caseItem.author.name}
                        </span>
                        <Link href={caseItem.author.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors flex items-center justify-center bg-white/5 hover:bg-white/10 w-6 h-6 rounded-full" title="LinkedIn Profile">
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                      <p className="text-sm text-gray-400 mt-0.5">{caseItem.author.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom: Stat and Link */}
              <div className="pt-8 border-t border-white/5 flex flex-wrap items-end justify-between gap-6 relative z-10 mt-auto">
                <div>
                  <p className={`text-5xl font-bold mb-2 tracking-tighter ${caseItem.statColor}`}>
                    {caseItem.stat}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold max-w-[200px] leading-snug">
                    {caseItem.description}
                  </p>
                </div>
                
                <Link href={caseItem.url} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 group-hover:text-white shrink-0 group-hover:scale-105 duration-300">
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
