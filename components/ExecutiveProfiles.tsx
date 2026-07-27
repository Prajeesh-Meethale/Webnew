import Image from 'next/image'
import Link from 'next/link'

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
      quote: '"AI sees what buyers see - and now we\'re part of the answer."',
      image: '/executives/alexandru-andrei.png',
      url: '#',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">Executive AI Presence</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">See how leaders leverage AI visibility</h2>
          </div>
          <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 whitespace-nowrap">
            View all executive stories →
          </Link>
        </div>

        {/* Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {executives.map((exec) => (
            <div key={exec.name} className="bg-card border border-border rounded-xl p-8 space-y-6">
              {/* Profile */}
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{exec.name}</h3>
                    <span className="text-lg">{exec.flag}</span>
                  </div>
                  <p className="text-sm text-primary font-medium">{exec.title}</p>
                  <p className="text-xs text-muted-foreground">{exec.company}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground italic text-lg">{exec.quote}</p>

              {/* Link */}
              <Link href={exec.url} className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 text-sm">
                Read executive story →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
