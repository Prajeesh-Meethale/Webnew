import { MessageSquare, Brain, FileText, Globe, CheckCircle } from 'lucide-react'

export function ProcessFlow() {
  const steps = [
    {
      number: 1,
      title: 'Buyer has a problem',
      icon: MessageSquare,
    },
    {
      number: 2,
      title: 'Asks AI for options',
      icon: Brain,
    },
    {
      number: 3,
      title: 'Creates shortlist',
      icon: FileText,
    },
    {
      number: 4,
      title: 'Visits websites',
      icon: Globe,
    },
    {
      number: 5,
      title: 'Books meeting',
      icon: CheckCircle,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">
            AI DOESN&apos;T REPLACE BUYING JOURNEYS.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            It changes{' '}
            <span className="text-primary">where they begin</span>.
          </h2>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col md:flex-row items-center gap-4 md:gap-2 flex-1">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center gap-4 flex-1">
                    <div className="w-24 h-24 rounded-full border-2 border-border bg-card/50 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-center font-semibold text-foreground text-sm">{step.title}</p>
                  </div>

                  {/* Arrow - hidden on last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden text-muted-foreground">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="text-center border-t border-border pt-8 mt-8">
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>If AI doesn&apos;t recommend you, your website never gets the opportunity to sell.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
