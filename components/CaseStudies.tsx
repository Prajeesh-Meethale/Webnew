import Link from 'next/link'

export function CaseStudies() {
  const cases = [
    {
      name: 'Carbon Jar',
      flag: '🇬🇧',
      stat: '+26',
      description: 'prompts where recommended',
      quote: '"AI helped us show up for the right buyers at the right moment."',
      url: '#',
    },
    {
      name: 'AgileCatalyst',
      flag: '🇺🇸',
      stat: '3x',
      description: 'in AI recommendations',
      quote: '"It\'s not about ranking higher. It\'s about being understood."',
      url: '#',
    },
    {
      name: 'Employers Council',
      flag: '🇺🇸',
      stat: '+41%',
      description: 'increase in conversion rate',
      quote: '"From 0 to recommended in 41% of prompts within 30 days."',
      url: '#',
    },
    {
      name: 'DeusAds',
      flag: '🇷🇴',
      stat: 'From 0 → 4',
      description: 'AI systems now recommend us',
      quote: '"AI systems now recommend our clients before they ever reach out."',
      url: '#',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">TRUSTED BY LEADERS ACROSS INDUSTRIES & BORDERS</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Organizations</h2>
            <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
              View all case studies →
            </Link>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cases.map((caseItem) => (
            <div key={caseItem.name} className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/30 transition-colors">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{caseItem.flag}</span>
                </div>
                <h3 className="font-semibold text-foreground">{caseItem.name}</h3>
              </div>

              {/* Stat */}
              <div>
                <p className="text-2xl font-bold text-primary">{caseItem.stat}</p>
                <p className="text-sm text-muted-foreground">{caseItem.description}</p>
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground italic">{caseItem.quote}</p>

              {/* Link */}
              <Link href={caseItem.url} className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 pt-2">
                Read case study →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
