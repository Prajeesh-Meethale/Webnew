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
    <section className="py-32 bg-[#0a0b10] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent -z-10" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[11px] text-indigo-400 font-bold tracking-[0.25em] mb-6 uppercase">
            AI doesn't replace buying journeys.
          </p>
          <h2 className="text-4xl md:text-[52px] font-bold text-white heading-font tracking-[-0.01em] leading-tight">
            It changes <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">where</span> they begin.
          </h2>
        </div>

        {/* Process Flow */}
        <div className="relative">
          <div className="flex overflow-x-auto md:overflow-visible pb-8 md:pb-0 items-start md:items-center justify-start md:justify-between gap-0 mb-20 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex items-start md:items-center shrink-0 snap-center group first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0">
                  {/* Step Box */}
                  <div className="flex flex-col items-center gap-4 md:gap-5 w-[130px] md:w-auto">
                    <div className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] glass flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:border-indigo-500/30 group-hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)]">
                      {/* Subtle inner glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 ${step.color} relative z-10 transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                    </div>
                    <p className="text-center text-[#A1A1AA] text-[13px] md:text-[15px] font-medium whitespace-pre-line leading-[1.4] transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </p>
                  </div>

                  {/* Arrow - hidden on last item */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center justify-center w-6 md:w-auto md:flex-1 mt-7 md:mt-0 md:-mt-10">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/15" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3.5 text-[14px] text-[#A1A1AA] font-medium">
              <Info className="w-4 h-4 text-indigo-400" />
              <span>If AI doesn't recommend you, your website never gets the opportunity to sell.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
