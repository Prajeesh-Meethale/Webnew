import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export function ExecutiveProfiles() {
  const executives = [
    {
      name: 'Jonita Andoni',
      flag: '🇺🇸',
      flagImage: '/Flag_of_the_United_States.svg',
      title: 'Finance & Analytics Leader',
      company: 'JPMorgan Chase • New York, USA',
      quote: '"Data we can trust. Insights we can act on."',
      image: '/executives/jonita.jfif',
      linkedin: 'https://www.linkedin.com/in/jonita-andoni-3b8a1172/',
      url: '#',
    },
    {
      name: 'Alexandru Andrei',
      flag: '🇷🇴',
      flagImage: '/executives/Flag_of_Romania.svg',
      title: 'Risk & Control Leader',
      company: 'Ahold Delhaize Group • Bucharest, Romania',
      quote: '"AI sees what buyers see—and now we\'re part of the answer."',
      image: '/executives/alex_new.jfif',
      linkedin: 'https://www.linkedin.com/in/alexandrupr/',
      url: '#',
    },
  ]

  return (
    <section className="py-12 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <h2 className="text-lg font-bold text-white">Executive AI Presence</h2>
          <Link href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1 transition-colors">
            View all executive stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {executives.map((exec) => (
            <div key={exec.name} className="bg-[#12131A] border border-white/5 rounded-xl p-6 flex items-start gap-6 hover:border-white/10 transition-colors shadow-lg">
              {/* Profile Image */}
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover rounded-full border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                />
              </div>
              
              {/* Profile Details */}
              <div className="flex flex-col gap-2 w-full">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-white text-base">{exec.name}</h3>
                    <Link href={exec.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors flex items-center justify-center bg-white/5 hover:bg-white/10 w-6 h-6 rounded-full" title="LinkedIn Profile">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </Link>
                    {exec.flagImage ? (
                      <img src={exec.flagImage} alt="Flag" className="w-5 h-5 rounded-sm object-cover ml-2" />
                    ) : (
                      <span className="text-sm ml-2">{exec.flag}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300">{exec.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{exec.company}</p>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mt-2 mb-1">
                  {exec.quote}
                </p>

                <Link href={exec.url} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1 transition-colors mt-2">
                  Read executive story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
