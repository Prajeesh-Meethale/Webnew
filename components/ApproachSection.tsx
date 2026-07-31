import { User, Wrench, RefreshCw, BarChart2, ArrowRight } from 'lucide-react'

export function ApproachSection() {
  const steps = [
    {
      number: '01',
      title: 'Investigate',
      icon: User,
      color: 'text-indigo-400',
      description: 'We analyze how AI systems see your business across real buyer prompts.',
    },
    {
      number: '02',
      title: 'Fix',
      icon: Wrench,
      color: 'text-indigo-400',
      description: 'We close structural gaps that limit your visibility and authority.',
    },
    {
      number: '03',
      title: 'Monitor',
      icon: RefreshCw,
      color: 'text-indigo-400',
      description: 'We continuously track mentions, citations, and recommendations.',
    },
    {
      number: '04',
      title: 'Optimize',
      icon: BarChart2,
      color: 'text-indigo-400',
      description: 'We refine, expand, and improve so you stay visible as AI evolves.',
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-8">
          
          {/* Left Text */}
          <div className="w-full xl:w-[22%] shrink-0">
            <p className="text-sm text-indigo-500 font-semibold tracking-[0.2em] mb-4 uppercase">OUR APPROACH</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight heading-font">
              Investigation first.<br />
              Execution always.
            </h2>
          </div>

          {/* Steps */}
          <div className="w-full xl:w-[78%] flex flex-col md:flex-row items-stretch gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex-1 flex items-center group relative">
                  
                  {/* Card */}
                  <div className="w-full h-full bg-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors flex flex-col justify-start">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full border border-indigo-500/30 flex items-center justify-center shrink-0">
                        <Icon className={`w-5 h-5 ${step.color}`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-white font-medium text-lg leading-tight">{step.number}</div>
                        <div className="text-white font-medium text-lg leading-tight">{step.title}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 z-10 w-6 h-6 items-center justify-center bg-background">
                      <ArrowRight className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                    </div>
                  )}
                  
                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center w-full py-2">
                      <ArrowRight className="w-4 h-4 text-gray-600 rotate-90" strokeWidth={1.5} />
                    </div>
                  )}

                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  )
}
