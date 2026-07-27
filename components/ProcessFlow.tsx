import { MessageSquare, Bot, ListChecks, Globe, CalendarCheck, Info, ArrowRight } from 'lucide-react'

export function ProcessFlow() {
  const steps = [
    {
      number: 1,
      title: 'Buyer has\na problem',
      icon: MessageSquare,
      color: 'text-purple-500',
    },
    {
      number: 2,
      title: 'Asks AI\nfor options',
      icon: Bot,
      color: 'text-green-500',
    },
    {
      number: 3,
      title: 'Creates\nshortlist',
      icon: ListChecks,
      color: 'text-orange-500',
    },
    {
      number: 4,
      title: 'Visits\nwebsites',
      icon: Globe,
      color: 'text-blue-500',
    },
    {
      number: 5,
      title: 'Books\nmeeting',
      icon: CalendarCheck,
      color: 'text-green-500',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-500 font-semibold tracking-[0.2em] mb-4 uppercase">
            AI doesn't replace buying journeys.
          </p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground heading-font">
            It changes <span className="text-indigo-500">where</span> they begin.
          </h2>
        </div>

        {/* Process Flow */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col md:flex-row items-center flex-1">
                  {/* Step Box */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl border border-white/10 bg-[#12131A] flex items-center justify-center shadow-lg">
                      <Icon className={`w-8 h-8 ${step.color}`} strokeWidth={1.5} />
                    </div>
                    <p className="text-center text-gray-300 text-sm whitespace-pre-line leading-snug">
                      {step.title}
                    </p>
                  </div>

                  {/* Arrow - hidden on last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex flex-1 items-center justify-center -mt-8">
                      <ArrowRight className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                    </div>
                  )}

                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden text-gray-600 my-4">
                      <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-[#12131A] border border-white/10 rounded-full px-6 py-3 text-sm text-gray-300">
              <Info className="w-4 h-4 text-indigo-500" />
              <span>If AI doesn't recommend you, your website never gets the opportunity to sell.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
