import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ExecutiveProfiles() {
  const executives = [
    {
      name: 'Jonita Andoni',
      flag: '🇺🇸',
      title: 'Finance & Analytics Leader',
      company: 'JPMorgan Chase • New York, USA',
      quote: '"Data we can trust. Insights we can act on."',
      image: '/executives/jonita-andoni.png',
      url: '#',
    },
    {
      name: 'Alexandru Andrei',
      flag: '🇷🇴',
      title: 'Risk & Control Leader',
      company: 'Bucharest, Romania',
      quote: '"AI sees what buyers see—and now we\'re part of the answer."',
      image: '/executives/alexandru-andrei.png',
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
                  className="object-cover rounded-full"
                />
              </div>
              
              {/* Profile Details */}
              <div className="flex flex-col gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-white text-base">{exec.name}</h3>
                    <span className="text-sm">{exec.flag}</span>
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
