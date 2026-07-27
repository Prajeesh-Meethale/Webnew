import { Search, Wrench, Eye, TrendingUp } from 'lucide-react'

export function ApproachSection() {
  const steps = [
    {
      number: '01',
      title: 'Investigate',
      icon: Search,
      description: 'We analyze how AI systems rank your business across real buyer prompts.',
    },
    {
      number: '02',
      title: 'Fix',
      icon: Wrench,
      description: 'We close structural gaps that limit your visibility, and authority.',
    },
    {
      number: '03',
      title: 'Monitor',
      icon: Eye,
      description: 'We continuously track mentions, recommendations, and visibility across AI systems.',
    },
    {
      number: '04',
      title: 'Optimize',
      icon: TrendingUp,
      description: 'We refine, expand, and improve you stay visible as AI evolves.',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">OUR APPROACH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Investigation first. <br />
            <span className="text-primary">Execution always.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="bg-card border border-border rounded-xl p-8 space-y-4 relative group hover:border-primary/50 transition-colors">
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector - hidden on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary/30 z-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
